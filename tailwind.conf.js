function enviarEmail(event) {
    event.preventDefault();

    // Ocultar texto e imagem juntos
    document.getElementById('contentWrapper').style.display = 'none';

    const destinatario = document.getElementById('destinatario').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const templateParams = {
        destinatario: destinatario,
        assunto: assunto,
        mensagem: mensagem
    };

    emailjs.send('service_your_service_id', 'template_your_template_id', templateParams)
        .then((response) => {
            alert('E-mail enviado com sucesso!');
            window.location.href = 'index.html';
        }, (error) => {
            alert('Erro ao enviar o e-mail. Tente novamente.');

            // Se o envio falhar, o conteúdo volta a aparecer
            document.getElementById('contentWrapper').style.display = 'block';
        });
}
