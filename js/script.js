// DOM ready の簡易チェック（軽量）
document.addEventListener('DOMContentLoaded', function () {
  const magicBtn = document.getElementById('magicBtn');
  const magicMsg = document.getElementById('magicMsg');
  magicBtn.addEventListener('click', () => {
    magicMsg.classList.toggle('hidden');
    magicBtn.textContent = magicMsg.classList.contains('hidden') ? '押してみて！' : 'もう一度';
  });

  const form = document.getElementById('contactForm');
  const formResult = document.getElementById('formResult');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name').trim();
    const message = fd.get('message').trim();
    // 本来はサーバ送信だが、ここではフロントだけ表示
    formResult.textContent = `${name}さん、メッセージを受け取りました：「${message}」`;
    formResult.classList.remove('hidden');
    form.reset();
  });
});
