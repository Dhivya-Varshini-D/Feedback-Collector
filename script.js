const form = document.getElementById('feedbackForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const feedbackData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    });

    if (res.ok) {
      responseMessage.textContent = '✅ Feedback submitted successfully!';
      responseMessage.style.color = 'green';
      form.reset();
    } else {
      responseMessage.textContent = '❌ Failed to submit feedback.';
      responseMessage.style.color = 'red';
    }
  } catch (error) {
    responseMessage.textContent = '⚠️ Error submitting feedback.';
    responseMessage.style.color = 'orange';
    console.error(error);
  }
});
