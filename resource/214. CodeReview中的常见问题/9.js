function publishPost(post) {
  if (isLoggedIn()) {
    if (post) {
      if (isPostDoubleChecked()) {
        doPost(post);
      } else {
        throw new Error('不要重复发布文章');
      }
    } else {
      throw new Error('文章不可为空');
    }
  } else {
    throw new Error('你需要登录');
  }
}

function publishPost(post) {
  if (!isLoggedIn()) {
    throw new Error('你需要登录');
  }
  if (!post) {
    throw new Error('文章不可为空');
  }
  if (!isPostDoubleChecked()) {
    throw new Error('不要重复发布文章');
  }
  doPost(post);
}
