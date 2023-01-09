import { useContext, useState } from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green, blue } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { postTweetService } from "../../../service/TrytterService";
import UserContext from "../../../contextAPI/userContext";
import Cookies from "universal-cookie";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

// Your app...
const Flex = styled("div", { display: "flex" });
const Box = styled("div", {});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 50,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      blue: {
        backgroundColor: "white",
        color: blue.blue11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
        width: "90%",
        height: "50px",

        // position: "absolute",
        // top: "2vw",
        // right: "7px",
        // padding: "4px 16px",
      },
    },
  },

  defaultVariants: {
    variant: "blue",
  },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: blue.blue11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: blue.blue4 },
  "&:focus": { boxShadow: `0 0 0 2px ${blue.blue7}` },
});

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginBottom: 15,
});

const Label = styled("label", {
  fontSize: 15,
  color: blue.blue11,
  width: 90,
  textAlign: "right",
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: blue.blue11,
  boxShadow: `0 0 0 1px ${blue.blue7}`,
  height: 35,

  "&:focus": { boxShadow: `0 0 0 2px ${blue.blue8}` },
  "&:disabled": { color: mauve.mauve5, boxShadow: `0 0 0 1px ${mauve.mauve4}` },
});

const PostTweet = () => {
  const [tweet, setTweet] = useState("");
  const context = useContext(UserContext);
  
  const handlerTweet = async () => {
    console.log("a")
    const result = await postTweetService(tweet);

    const cookies = new Cookies();
    const user = cookies.get("user");
    await context.getPostsByUser(user.userId,0);
    // await context.getPosts(0);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Tweetar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Novo Tweet</DialogTitle>
        <DialogDescription>Digite um novo tweet</DialogDescription>
        <Fieldset>
          <Label htmlFor="username">Tweet</Label>
          <Input
            id="tweet"
            defaultValue=""
            onChange={(e) => setTweet(e.target.value)}
          />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button variant="green" onClick={handlerTweet}>
              Tweetar
            </Button>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PostTweet;
