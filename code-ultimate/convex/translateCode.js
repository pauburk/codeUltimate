import { query } from "./_generated/server";

function postData(input) {
    $.ajax({
        type: "POST",
        url: "/translateCode",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    return response;
}

export default query(async ({ db }) => {
    // return await db.query("messages").order("desc").take(1);
    // console.log("test");
    // console.log(postData(await db.query("messages").order("desc").take(1)));
    return postData(await db.query("messages").order("desc").take(1));
});