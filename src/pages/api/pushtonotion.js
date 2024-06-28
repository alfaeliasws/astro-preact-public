import { Client } from '@notionhq/client';
// import { createRequire } from 'module';
// const { Client } = createRequire('@notionhq/client');
// const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notion = new Client({ auth: import.meta.env.PUBLIC_NOTION_API_KEY });

export async function post({ request }){

    const req = await request.json();
    if(request.method !== 'POST'){
        return new Response (JSON.stringify({ok: false}),{
            status: 405,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        // res.status(405)
            // .json({ message: `${req.method} requests are not allowed`})
    }
    try{
    const { name, email, subject, message } = req
    await notion.pages.create({
    "parent": {
        "type": "database_id",
        "database_id": import.meta.env.PUBLIC_NOTION_DATABASE_ID
        // "database_id": process.env.NOTION_DATABASE_ID
    },
    "properties": {
        "Name": {
            "title": [
                {
                    "text": {
                        "content": name
                    }
                }
            ]
        },
        "Email": {
            "rich_text": [
                {
                    "text": {
                        "content": email
                    }
                }
            ]
        },
        "Subject": {
        "rich_text": [
                {
                    "text": {
                        "content": subject
                    }
                }
            ]
        },
        "Message": {
            "rich_text": [
                {
                    "text": {
                        "content": message
                    }
                }
            ]
            }
        }
    });
    return new Response (JSON.stringify({ok: true}),{
    status: 200,
    headers: {
        'Content-Type': 'application/json'
        },
    body: {
        'message' : 'done'
    }
    })
} catch (error) {
    // res.status(500).json({ msg: 'There was an error'})
    return new Response (JSON.stringify({ok: false}),{
        status: 500,
        headers: {
            'Content-Type': 'application/json'
            },
        body: {
            'message' : 'there was an error'
        }
        })
}
};