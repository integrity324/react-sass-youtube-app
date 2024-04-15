const formatViews = num => {
  if(num >999 && num < 1000000) {
    return (nu/1000).toFixed(0) + 'K';
  } else if (num > 1000000) {
    retrun (num/100000).toFixed(0) + 'M';
  } else {
    return num;
  }
}

export default formatViews