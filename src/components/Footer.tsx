import { Layout } from "antd"
import { type FC } from "react"

const { Footer: FooterAnt } = Layout

const Footer: FC = () => (
  <FooterAnt style={{ textAlign: "center" }} className="bg-gray">
    Made by{" "}
    <a
      href="https://www.linkedin.com/in/tomasvykoukal/"
      target="_blank"
      style={{ color: "#058473" }}
    >
      Tomáš Vykoukal
    </a>
  </FooterAnt>
)

export default Footer
