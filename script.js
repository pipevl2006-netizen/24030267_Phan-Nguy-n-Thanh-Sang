// Hiệu ứng hiện nhẹ khi cuộn đến từng phần; nội dung vẫn đọc được nếu trình duyệt không hỗ trợ.
const revealTargets = document.querySelectorAll('.essay, .thought-card, .closing-copy, .margin-note');

if ('IntersectionObserver' in window) {
  revealTargets.forEach((element) => element.classList.add('reveal'));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => observer.observe(element));
}
