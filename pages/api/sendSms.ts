// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
import NextCors from "nextjs-cors";

import Cors from "cors";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessageInstance | string>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

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

    res.status(200).json(response);
  } else {
    res.status(200).json("Only POST method is accepted");
  }
}
