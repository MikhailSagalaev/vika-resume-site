import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { TelegramIcon } from '@/components/icons';
import { LangSwitch } from '@/components/lang-switch';

export const Navbar = () => {
  // removed mini-game
  return (
    <HeroUINavbar maxWidth="xl" position="static" className="glass fixed top-0 left-0 right-0 z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'nav-underline data-[active=true]:text-primary data-[active=true]:font-medium',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex items-center gap-3">
          <a
            href="https://t.me/mal_ina_victoria"
            target="_blank"
            rel="noreferrer noopener"
            title="Telegram"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-6 w-6 text-default-500 hover:text-foreground transition-colors" />
          </a>
          <ThemeSwitch />
          <LangSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/mal_ina_victoria"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-6 w-6 text-default-500 hover:text-foreground transition-colors" />
          </a>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </div>
      </NavbarContent>

      {null}

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
