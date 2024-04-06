import {
	createTransport,
	type SendMailOptions,
	type Transporter,
	type TransportOptions
} from 'nodemailer';

import {
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PORT,
	EMAIL_SERVER_USER1,
	EMAIL_SERVER_PASSWORD
} from '$env/static/private';

const config: TransportOptions = {
	port: EMAIL_SERVER_PORT,
	host: EMAIL_SERVER_HOST,
	secure: true,
	auth: {
		user: EMAIL_SERVER_USER1,
		pass: EMAIL_SERVER_PASSWORD
	}
};

const transporter: Transporter = createTransport(config);

async function sendMail(mailOptions: SendMailOptions) {
	const info = await transporter.sendMail(mailOptions);
	console.log('Message sent: %s', info.messageId);
	return info;
}

export { transporter, sendMail };
