import React from "react"
import QRCode from "qrcode-svg"

export default () => {

  const LinkQRCode = new QRCode({
    content: "http://arianbahreman.com/",
    padding: 2,
    width: 300,
    height: 300,
    color: "#000000",
    background: "#ffffff",
    ecl: "L",
  }).svg()

  return (
    <div dangerouslySetInnerHTML={{__html: LinkQRCode}}></div>
  )
}