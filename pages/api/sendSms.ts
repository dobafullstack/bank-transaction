// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessageInstance | string>
) {
  if (req.method === "POST") {
    var accountSid = "AC17bc4654122bd09b233cfccb2d094eec"; // Your Account SID from www.twilio.com/console
    var authToken = "d64a9527497e467c7d38229356fa015e"; // Your Auth Token from www.twilio.com/console

    const client = twilio(accountSid, authToken, {
      lazyLoading: true,
    });

    const response = await client.messages.create({
      body: req.body.body,
      from: "+15706724897",
      to: "+84944609933",
    });

    res.status(200).json(response)
  } else {
    res.status(200).json("Only POST method is accepted");
  }
}
