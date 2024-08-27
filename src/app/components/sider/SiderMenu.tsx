"use client"
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode, useEffect, useState } from "react";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {

  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if(user) {
        const uid = user.uid;
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

    interface MenuLink {
        icon : ReactNode,
        title: string,
        link : Url,
        logged?: Boolean
    }

    const menu: MenuLink[] = [
        {
          icon: <FaHouse />,
          title: "Trang Chủ",
          link: "/"
        },
        {
          icon: <FaMusic />,
          title: "Danh mục bài hát",
          link: "/categories"
        },
        {
          icon: <FaPodcast />,
          title: "Ca sĩ",
          link: "/singers"
        },
        {
          icon: <FaHeart />,
          title: "Bài hát yêu thích",
          link: "/wishlist",
          logged: true
        },
        {
          icon: <FaRightFromBracket />,
          title: "Đăng xuất",
          link: "/logout",
          logged: true
        },
        {
          icon: <FaUser />,
          title: "Đăng nhập",
          link: "/login",
          logged: false
        },
        {
          icon: <FaUserPlus />,
          title: "Đăng ký",
          link: "/register",
          logged: false
        }
      ]

      



    return (
        <>
          <nav className="pt-[30px] pl-[20px]">
            <ul className="">
                {menu.map((item, index) => (
                  <SiderMenuItem 
                  item={item}
                  key={index}
                  isShow={item.logged === undefined || item.logged === isLogin ? true : false}
                  />
                ))}
            </ul>
          </nav>
        </>
    )
} 