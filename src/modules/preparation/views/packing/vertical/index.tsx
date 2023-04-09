import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BackButton from "@/common/components/backButton";
import { ViewProps } from "@/modules/preparation/types/viewProps";

export default function Index({ list }: ViewProps) {
  return (
    <>
      <BackButton />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="5vh"
        borderBottom={1}
      >
        PACKING LIST
      </Box>
      <List>
        {list.map((category) => (
          <li key={category.name}>
            <ul>
              <ListSubheader disableSticky>{category.name}</ListSubheader>
              {category.items.map((item, index) => (
                <ListItemButton>
                  <ListItemIcon>
                    <Checkbox
                      icon={<CheckCircleOutlineIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItem key={index}>
                    <ListItemText>{item.name}{item.count ? <span style={{color: "grey", fontSize: "0.75rem"}}>{` x ${item.count}`}</span> : ""}</ListItemText>
                  </ListItem>
                </ListItemButton>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </>
  );
}
