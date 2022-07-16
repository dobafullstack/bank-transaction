// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
import NextCors from "nextjs-cors";

import Cors from "cors";

const allowCors = (fn: Function) => async (req: any, res: any) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

async function handler(
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
    var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    var authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

    const client = twilio(accountSid, authToken, {
      lazyLoading: true,
    });

    const response = await client.messages.create({
      body: req.body.body,
      from: process.env.PHONE_NUMBER_FROM,
      to: process.env.PHONE_NUMBER_TO as string,
    });

    res.status(200).json(response);
  } else {
    res.status(200).json("Only POST method is accepted");
  }
}

export default allowCors(handler);
