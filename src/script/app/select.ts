function createSelect() {
  const select: HTMLInputElement | null = document.querySelector('.edit__select');
  const selectContainer: HTMLElement | null = document.querySelector('.select__items');
  const selectValues: NodeListOf<HTMLElement> = document.querySelectorAll('.select__item');

  select?.addEventListener('click', (event) => {
    event.stopPropagation();
    selectContainer?.classList.toggle('select__items-active');
  });

  selectValues.forEach(selectValue => {
    selectValue.addEventListener('click', () => {
      if (select !== null) {
        select.dataset.value = selectValue.dataset.value;
        select.value = selectValue.innerText;
      }
      console.log(selectValue.dataset.value);

    });
  });

  document.addEventListener('click', () => {
    selectContainer?.classList.remove('select__items-active');
  });
}

export default createSelect;