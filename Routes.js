const express = require("express")
const axios = require("axios")

const router = express.Router()

const fetchData = async(req, res) => {
  const browserInfo = req.headers;
  const myIp = await (await axios.get('https://api.ipify.org/?format=json')).data.ip
  res.json({
    ip: myIp,
    language: browserInfo["accept-language"],
    software: browserInfo["user-agent"]
  })
}

router.get("/whoami", fetchData)



module.exports = router;