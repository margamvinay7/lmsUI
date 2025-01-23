"use client";

import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import NavMain from "@/components/nav-main";
import NavProjects from "@/components/nav-projects";
import NavSecondary from "@/components/nav-secondary";
import NavUser from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Margam Vinay",
    email: "margamvinay77@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Schedule",
      url: "/schedule",
      icon: Bot,
      items: [
        {
          title: "Live Classes",
          url: "/schedule",
        },
        {
          title: "Doubt Sessions",
          url: "/schedule/doubtSchedule",
        },
      ],
    },
    {
      title: "Courses",
      url: "/courses",
      icon: BookOpen,
    },
    {
      title: "Community",
      url: "/community",
      icon: Settings2,
    },
    {
      title: "Chats",
      url: "/chat",
      icon: Settings2,
    },
    {
      title: "Analytics",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Reports",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Payments",
      url: "#",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

const items = [
  "Dashbaord", //-> no. of trainers , no. of courses, no. of videos, no. of students enrolled, no. of batches,

  "Schedule", // class schedules for lecturer and student based on their courses
  "Courses", // for admin
  "My Courses", // for teacher and student
  "community", // for every role for community discard like or course wise or batch wise groups
  "chats", // chats page for whatsapp like
  "Analytics", // courses and students related data analytics graphs and charts,,
  "Reports", // for reports generation
  "payments", // payment related
];

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, open } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      {!isMobile ? (
        open ? (
          <SidebarHeader className="flex flex-row items-center">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Live Learn</span>
                      <span className="truncate text-xs">
                        Learning Management System
                      </span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarTrigger />
          </SidebarHeader>
        ) : (
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <SidebarTrigger />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
        )
      ) : (
        <SidebarHeader className="flex flex-row items-center">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Live Learn</span>
                    <span className="truncate text-xs">
                      Learning Management System
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarTrigger />
        </SidebarHeader>
      )}
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
