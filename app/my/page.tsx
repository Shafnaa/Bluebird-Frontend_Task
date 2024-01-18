import ItemList from "@/components/cards/ItemList";
import BackTemplate from "@/components/template/BackTemplate";
import { bookmarks, myPosts, myRequests, posts } from "@/lib/DummyData";
import React from "react";

const MyPage = () => {
  return (
    <BackTemplate>
      <div className="flex flex-col gap-3" id="#bookmark">
        <h2 className="font-bold">My Bookmarks</h2>
        <ul className="flex flex-col gap-2">
          {bookmarks.map((bookmark, index) => {
            const items = posts.filter((item) => item.id === bookmark.postId);
            return items.map((item, id) => <ItemList item={item} key={id} />);
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3" id="#bookmark">
        <h2 className="font-bold">My Requests</h2>
        <ul className="flex flex-col gap-2">
          {myRequests.map((bookmark, index) => {
            const items = posts.filter((item) => item.id === bookmark.postId);
            return items.map((item, id) => <ItemList item={item} key={id} />);
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-3" id="#bookmark">
        <h2 className="font-bold">My Posts</h2>
        <ul className="flex flex-col gap-2">
          {myPosts.map((bookmark, index) => {
            const items = posts.filter((item) => item.id === bookmark.postId);
            return items.map((item, id) => <ItemList item={item} key={id} />);
          })}
        </ul>
      </div>
    </BackTemplate>
  );
};

export default MyPage;
