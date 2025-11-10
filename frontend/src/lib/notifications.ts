/**
* src/lib/notifications.ts
* Helper to create & deliver notifications. Right now it stores a Notification row
* in the DB and logs a console message. Replace the `sendExternal` placeholder with
* Twilio / Resend / email provider calls.
*/
import { prisma } from '@/lib/prisma';


export type NotificationChannel = 'IN_APP' | 'SMS' | 'EMAIL' | 'WHATSAPP';


async function sendExternal(recipientContact: { phone?: string | null; email?: string | null }, channel: NotificationChannel, message: string) {
// TODO: integrate Twilio / Resend / SMTP here
console.log('sendExternal', { recipientContact, channel, message });
}


export async function sendNotification(recipientId: string, channel: NotificationChannel, message: string) {
// create DB notification
const recipient = await prisma.user.findUnique({ where: { id: recipientId }, include: { profile: true } });
if (!recipient) throw new Error('recipient_not_found');


await prisma.notification.create({
data: {
userId: recipient.id,
organizationId: recipient.organizationId,
type: channel === 'IN_APP' ? 'GENERIC' : 'WARNING',
title: channel === 'IN_APP' ? 'Message' : 'Alert',
body: message,
},
});


// optionally send to external channel
await sendExternal({ phone: recipient.profile?.phoneNumber, email: recipient.email }, channel, message);
}