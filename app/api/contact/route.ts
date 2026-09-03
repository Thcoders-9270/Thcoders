import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

    // If HubSpot token is not configured, just return success so the frontend works
    if (!accessToken) {
      console.warn('HubSpot Access Token is missing. Form submission not sent to HubSpot.');
      return NextResponse.json({ success: true, message: 'Message received (HubSpot not configured)' });
    }

    // Splitting full name into firstname and lastname roughly
    const nameParts = (name || '').split(' ');
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    // Map fields to HubSpot Contact properties
    const properties: Record<string, string> = {
      email: email || '',
      firstname: firstname,
      lastname: lastname,
      company: company || '',
      message: message || '', // Note: 'message' must be created as a custom property in your HubSpot account
    };

    const hubspotUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';

    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot submission error:', errorData);
      
      // If contact already exists, HubSpot returns 409. You could handle updates here if you want.
      if (response.status === 409) {
         console.log('Contact already exists in HubSpot');
         return NextResponse.json({ success: true, message: 'Contact already exists' });
      }

      return NextResponse.json(
        { error: 'Failed to create contact in HubSpot' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
