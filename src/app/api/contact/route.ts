
import { NextResponse, NextRequest } from 'next/server';
import sendMail from '../../../services/mail.services';

export async function POST(request: Request) {

    try {
        const req = await request.json()
        const { to, subject, text, html, type } = req;
        await sendMail({
            to,
            subject,
            text,
            html,
            type: type ?? 'gmail'
        });
        return NextResponse.json({
            message: "Email sent",
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500, });
    }

}