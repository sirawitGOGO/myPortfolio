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
          <FloatButton icon={<FacebookFilled/>} style={{backgroundColor: "#76ABAE"}}/>
          <FloatButton icon={<InstagramFilled/>} style={{backgroundColor: "#76ABAE"}} />
          <FloatButton icon={<GithubFilled/>} style={{backgroundColor: "#76ABAE"}} /> 
          <FloatButton icon={<LinkedinFilled/>} style={{backgroundColor: "#76ABAE"}} /> 
        </FloatButton.Group>
      </>
    );
};