import { IconBtn } from "./IconBtn";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { BiCommentEdit } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import { BiBookmarkHeart } from "react-icons/bi";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export function Comment({ id, message, user, createdAt }) {
  return (
    <>
      <div className="comment">
        <div className="header">
          <span classname="name">{user.name}</span>
          <span className="date">
            {dateFormatter.format(Date.parse(createdAt))}
          </span>
        </div>
        <div className="message">{message}</div>
        <div className="footer">
          <IconBtn Icon={FaHeart} aria-label={"Like"}></IconBtn>
          <IconBtn Icon={BiUpvote} aria-label={"Upvote"}></IconBtn>
          <IconBtn Icon={BiDownvote} aria-label={"Downvote"}></IconBtn>
          <IconBtn Icon={BiCommentDetail} aria-label={"Reply"}></IconBtn>
          <IconBtn Icon={BiCommentEdit} aria-label={"Edit"}></IconBtn>
          <IconBtn Icon={BiShareAlt} aria-label={"Share"}></IconBtn>
          <IconBtn Icon={BiTrashAlt} aria-label={"Delete"}></IconBtn>
          <IconBtn Icon={BiBookmarkHeart} aria-label={"Favorite"}></IconBtn>
        </div>
      </div>
    </>
  );
}
