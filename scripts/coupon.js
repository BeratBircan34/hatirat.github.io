document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.coupon-form');
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const submitBtn = form.querySelector('button');
    const couponBox = document.querySelector('.coupon-box');
    const copyIcon = couponBox.querySelector('.copy-icon');
    const couponCodeEl = couponBox.querySelector('.coupon-code');
    const COUPON_CODE = 'HATIRAT10';
  
    function updateSubmitState() {
      const allFilled = Array.from(inputs).every(i => i.value.trim() !== '');
      const allChecked = Array.from(checkboxes).every(c => c.checked);
      if (allFilled && allChecked) {
        submitBtn.classList.add('enabled');
        submitBtn.disabled = false;
      } else {
        submitBtn.classList.remove('enabled');
        submitBtn.disabled = true;
      }
    }
  
    inputs.forEach(i => i.addEventListener('input', updateSubmitState));
    checkboxes.forEach(c => c.addEventListener('change', updateSubmitState));
  
    submitBtn.addEventListener('click', e => {
      e.preventDefault();
      couponBox.style.display = 'block';
      couponCodeEl.textContent = COUPON_CODE;
    });
  
    copyIcon.addEventListener('click', () => {
      navigator.clipboard.writeText(COUPON_CODE).then(() => {
        copyIcon.textContent = '✅';
        setTimeout(() => copyIcon.textContent = '📋', 2000);
      });
    });
  
    // ilk durumda disable
    submitBtn.disabled = true;
  });
  