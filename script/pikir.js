document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.review-form form');
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Проверяем, заполнены ли оба поля
        if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Создаем новый отзыв
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `
            <h3>${nameInput.value}</h3>
            <p>${commentInput.value}</p>
        `;

        // Добавляем новый отзыв в начало списка
        const reviewsContainer = document.querySelector('.container');
        reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);

        // Очищаем поля формы
        nameInput.value = '';
        commentInput.value = '';

        alert('Спасибо за ваш отзыв!');
    });
});
