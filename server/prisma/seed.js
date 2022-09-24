import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  const kyle = await prisma.user.create({ data: { name: "Kyle" } });
  const sam = await prisma.user.create({ data: { name: "Sam" } });
  const dick = await prisma.user.create({ data: { name: "Dick" } });
  const sally = await prisma.user.create({ data: { name: "Sally" } });
  const jeannette = await prisma.user.create({ data: { name: "Jeannette" } });

  const post1 = await prisma.post.create({
    data: {
      body: "This is a post",
      title: "Post 1",
      userId: dick.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      body: "This is another post",
      title: "Post 2",
      userId: sally.id,
    },
  });
  const comment1 = await prisma.comment.create({
    data: {
      message: "This is a comment",
      postId: post1.id,
      userId: kyle.id,
    },
  });
  const comment2 = await prisma.comment.create({
    data: {
      message: "This is another comment",
      postId: post1.id,
      userId: sam.id,
    },
  });
  const comment3 = await prisma.comment.create({
    data: {
      message: "This is a nested comment",
      postId: post1.id,
      userId: kyle.id,
      parentId: comment1.id,
    },
  });
  const comment4 = await prisma.comment.create({
    data: {
      message: "This is a nested comment",
      postId: post1.id,
      userId: sam.id,
      parentId: comment1.id,
    },
  });
  const comment5 = await prisma.comment.create({
    data: {
      message: "this is a double-nested comment",
      postId: post1.id,
      userId: kyle.id,
      parentId: comment3.id,
    },
  });
  const comment6 = await prisma.comment.create({
    data: {
      message: "this is a triple-nested comment",
      postId: post1.id,
      userId: sam.id,
      parentId: comment5.id,
    },
  });
  const comment7 = await prisma.comment.create({
    data: {
      message: "this is a double-nested comment",
      postId: post1.id,
      userId: kyle.id,
      parentId: comment4.id,
    },
  });
  const comment8 = await prisma.comment.create({
    data: {
      message: "this is a comment on post 2",
      postId: post2.id,
      userId: kyle.id,
    },
  });
  const comment9 = await prisma.comment.create({
    data: {
      message: "this is a comment on post 2",
      postId: post2.id,
      userId: sam.id,
    },
  });
  const comment10 = await prisma.comment.create({
    data: {
      message: "this is a comment on post 2",
      postId: post2.id,
      userId: kyle.id,
    },
  });
  const comment11 = await prisma.comment.create({
    data: {
      message: "this is a comment on post 2",
      postId: post2.id,
      userId: sam.id,
    },
  });
  const comment12 = await prisma.comment.create({
    data: {
      message: "this is a nested comment",
      postId: post2.id,
      userId: kyle.id,
      parentId: comment8.id,
    },
  });
  const comment13 = await prisma.comment.create({
    data: {
      message: "this is a double-nested comment",
      postId: post2.id,
      userId: sam.id,
      parentId: comment12.id,
    },
  });
}

main();
