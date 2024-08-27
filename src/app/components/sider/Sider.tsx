import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
    return (
        <>
          <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
            <div className="pt-[30px] pl-[20px]">
              <Link href='/'>
                <img 
                src="/Logo.svg"
                alt="logo"
                className="h-[42px] w-auto"
                />
              </Link>
            </div>
            <SiderMenu/>
          </div>
        </>
    )
}