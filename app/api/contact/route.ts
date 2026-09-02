import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_FORM_GUID;

    // If HubSpot credentials are not configured, just return success so the frontend works
    if (!portalId || !formGuid) {
      console.warn('HubSpot Portal ID or Form GUID is missing. Form submission not sent to HubSpot.');
      return NextResponse.json({ success: true, message: 'Message received (HubSpot not configured)' });
    }

    // Prepare data for HubSpot Forms API
    // Splitting full name into firstname and lastname roughly
    const nameParts = (name || '').split(' ');
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    const hubspotData = {
      fields: [
        { objectTypeId: '0-1', name: 'email', value: email },
        { objectTypeId: '0-1', name: 'firstname', value: firstname },
        { objectTypeId: '0-1', name: 'lastname', value: lastname },
        { objectTypeId: '0-2', name: 'name', value: company || '' },
        { objectTypeId: '0-1', name: 'message', value: message || '' }
      ],
      context: {
        pageUri: 'https://www.thcoders.com/contact', // Replace with your actual domain
        pageName: 'Contact Us'
      }
    };

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot submission error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit to HubSpot' },
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
