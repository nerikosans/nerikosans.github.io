function showPopup(id){
  const texts = [
    "文章1です。",
    "文章2です。",
  ]

  const linkTexts = [
    "リンク1です。",
    "リンク2です。",
  ]

  const links = [
    "#",
    "#",
  ]

  $('#popup .text').text(texts[id]);
  $('#popup a').text(linkTexts[id]);
  $('#popup a').attr('href', links[id]);

  $('#popup').fadeIn(300);
}
$(() => {
  $('.menu-button').on('click', e => {
    const button = $(e.target);
    const id = button.attr('data-id');

    showPopup(id);
  });

  $('#popup .closeButton').on('click', () => {
    $('#popup').fadeOut(300);
  })
});
