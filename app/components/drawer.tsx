import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaShareSquare } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Twitter from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SnapchatIcon from "@mui/icons-material/BeachAccess";
import MailIcon from "@mui/icons-material/Share";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    drawerOne: false,
    drawerTwo: false,
  });

  const handleIconClick = () => {
    setState((prev) => ({ ...prev, drawerOne: false, drawerTwo: true }));
  };

  const getShareLink = (platform: string) => {
    const message = "Your share message here";
    switch (platform) {
      case "whatsapp":
        return `https://api.whatsapp.com/send/?text=Check+out+this+Linktree%21+-+https%3A%2F%2Flinktr.ee%2Flakshaykhattar%3Futm_source%3Dlinktree_profile_share&type=custom_url&app_absent=0`
      
        case "twitter":
        return `https://twitter.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20https://linktr.ee/lakshaykhattar?utm_source=linktree_profile_share&ltsid=64da5881-4cdb-4431-81ca-ffd7510564d3`
      case "facebook":
        return `https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Flinktr.ee%252Flakshaykhattar%253Futm_source%253Dlinktree_profile_share%26ltsid%3D64da5881-4cdb-4431-81ca-ffd7510564d3&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB`;

      case "snapchat":
        return `https://www.snapchat.com/scan?attachmentUrl=https%3A%2F%2Flinktr.ee%2Flakshaykhattar`;

      default:
        return "Please select a platform";
    }
  };

  return (
    <div>
      <Button
        onClick={() => setState((prev) => ({ ...prev, drawerOne: true }))}
      >
        <FaShareSquare className="text-purple-500 absolute" size={24} />
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open={state.drawerOne}
        onClose={() => setState((prev) => ({ ...prev, drawerOne: false }))}
        onOpen={() => setState((prev) => ({ ...prev, drawerOne: true }))}
      >
        <Drawer
          title="HI !"
          toggleDrawer={(value) =>
            setState((prev) => ({ ...prev, drawerOne: value }))
          }
          options={["Share this Layout"]}
          icons={[<MailIcon />]}
          onListClick={handleIconClick}
        />
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={state.drawerTwo}
        onClose={() => setState((prev) => ({ ...prev, drawerTwo: false }))}
        onOpen={() => setState((prev) => ({ ...prev, drawerTwo: true }))}
      >
        <Drawer
          title="Share Across Social Media"
          toggleDrawer={(value) =>
            setState((prev) => ({ ...prev, drawerTwo: value }))
          }
          options={[
            "Share on WhatsApp",
            "Share on Twitter",
            "Share on Facebook",
            "Share on SnapChat",
          ]}
          icons={[
            <WhatsAppIcon />,
            <Twitter />,
            <FacebookIcon />,
            <SnapchatIcon />,
          ]}
          onListClick={(index) => {
            if (index !== undefined) {
              const platform = [
                "whatsapp",
                "Twitter",
                "facebook",
                "snapchat",
              ][index];
              const shareLink = getShareLink(platform);
              if (shareLink) {
                window.open(shareLink, "_blank");
              }
            }
          }}
        />
      </SwipeableDrawer>
    </div>
  );
}

interface DrawerProps {
  title: string;
  toggleDrawer: (value: boolean) => void;
  onListClick?: (index?: number) => void;
  options: string[];
  icons: React.ReactNode[];
}

const Drawer: React.FC<DrawerProps> = ({
  title,
  toggleDrawer,
  onListClick,
  options,
  icons,
}) => {
  return (
    <Box
      className="bg-gray-400 text-2xl font-bold"
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <List>
        {options.map((text, index) => (
          <ListItem key={text} disablePadding className=" text-white">
            <ListItemButton onClick={() => onListClick?.(index)}>
              <ListItemIcon className="text-white">{icons[index]}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: 22,
                }}
                style={{ maxWidth: "fit-content", wordBreak: "break-all" }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
