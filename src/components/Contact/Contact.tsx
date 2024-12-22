import React, { useState } from "react";
import { ContactsFilled, FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import { FloatButton } from "antd";

export const Contact: React.FC = ()=>  {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () =>{
        setOpen((prevOpen) => !prevOpen)
    }
    return (
      <>
        <FloatButton.Group
          open={open}
          trigger="click"
          style={{ insetInlineEnd: 24 }}
          icon={<ContactsFilled/>}
          onClick={toggleOpen}
        >
          <FloatButton icon={<FacebookFilled/>} href="https://www.facebook.com/sirawit.arsanok/" target="blank" style={{backgroundColor: "#76ABAE"}}/>
          <FloatButton icon={<InstagramFilled/>} href="https://www.instagram.com/sssirxwxt/" target="blank" style={{backgroundColor: "#76ABAE"}} />
          <FloatButton icon={<GithubFilled/>} href="https://github.com/sirawitGOGO" target="blank" style={{backgroundColor: "#76ABAE"}} /> 
          <FloatButton icon={<LinkedinFilled/>} href="https://www.linkedin.com/in/sirawit-arsanok" target="blank" style={{backgroundColor: "#76ABAE"}} /> 
        </FloatButton.Group>
      </>
    );
};