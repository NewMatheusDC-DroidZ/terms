<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Termos de Serviço & Política de Privacidade — Discord Bot</title>
  <style>
    :root {
      --bg-color: #f9f7f2;
      --text-primary: #2c2c2c;
      --text-secondary: #5a5a5a;
      --accent-color: #4a4a4a;
      --divider-color: #e8e4da;
      --header-height: 80px;
      --spacing-unit: 1.5rem;
      --font-serif: 'Georgia', 'Times New Roman', serif;
      --font-sans: 'Helvetica Neue', 'Arial', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--bg-color);
      color: var(--text-primary);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-unit);
    }

    /* Header */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgba(249, 247, 242, 0.95);
      backdrop-filter: blur(12px);
      z-index: 100;
      border-bottom: 1px solid var(--divider-color);
      height: var(--header-height);
      display: flex;
      align-items: center;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-unit);
    }

    .logo {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: var(--text-secondary);
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: var(--accent-color);
    }

    /* Main Content */
    main {
      margin-top: calc(var(--header-height) + 2rem);
      padding-bottom: 4rem;
    }

    .content-section {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .legal-documents {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .document-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      padding: 2.5rem;
      border: 1px solid var(--divider-color);
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
      animation-fill-mode: both;
    }

    .document-card:nth-child(1) { animation-delay: 0.1s; }
    .document-card:nth-child(2) { animation-delay: 0.3s; }

    .document-header {
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 1.5rem;
    }

    .document-title {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 500;
      color: var(--accent-color);
      margin-bottom: 0.5rem;
    }

    .document-subtitle {
      color: var(--text-secondary);
      font-size: 1rem;
    }

    .document-content {
      font-size: 1.05rem;
      line-height: 1.8;
    }

    .document-content h2 {
      font-family: var(--font-serif);
      font-size: 1.4rem;
      margin: 2.5rem 0 1.2rem 0;
      color: var(--accent-color);
      font-weight: 500;
    }

    .document-content h3 {
      font-size: 1.2rem;
      margin: 1.8rem 0 0.8rem 0;
      color: var(--accent-color);
      font-weight: 500;
    }

    .document-content p {
      margin-bottom: 1.2rem;
    }

    .document-content ul {
      margin: 1rem 0 1.5rem 1.5rem;
      padding-left: 0.5rem;
    }

    .document-content li {
      margin-bottom: 0.8rem;
    }

    .document-content .divider {
      margin: 2.5rem 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--divider-color), transparent);
    }

    .document-content .highlight {
      background-color: rgba(74, 74, 74, 0.05);
      padding: 0.8rem 1rem;
      border-radius: 6px;
      border-left: 3px solid var(--accent-color);
    }

    /* Sidebar */
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .toc {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      padding: 2rem;
      border: 1px solid var(--divider-color);
      animation: slideUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
      animation-fill-mode: both;
      animation-delay: 0.5s;
    }

    .toc-title {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--accent-color);
      margin-bottom: 1.5rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--divider-color);
    }

    .toc-list {
      list-style: none;
      font-size: 0.95rem;
    }

    .toc-list li {
      margin-bottom: 0.7rem;
    }

    .toc-link {
      text-decoration: none;
      color: var(--text-secondary);
      transition: color 0.2s ease;
      position: relative;
      padding-left: 0.8rem;
    }

    .toc-link::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-color);
      opacity: 0.7;
    }

    .toc-link:hover {
      color: var(--accent-color);
    }

    .info-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      padding: 2rem;
      border: 1px solid var(--divider-color);
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
      animation-fill-mode: both;
      animation-delay: 0.7s;
    }

    .info-title {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--accent-color);
      margin-bottom: 1rem;
    }

    .info-content {
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .info-content p {
      margin-bottom: 0.8rem;
    }

    .footer {
      text-align: center;
      padding: 3rem 0;
      border-top: 1px solid var(--divider-color);
      margin-top: 2rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .footer-link {
      text-decoration: none;
      color: var(--text-secondary);
      transition: color 0.2s ease;
    }

    .footer-link:hover {
      color: var(--accent-color);
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .content-section {
        grid-template-columns: 1fr;
      }

      .sidebar {
        order: 2;
      }
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1.5rem;
      }

      .document-card {
        padding: 1.8rem;
      }

      .document-title {
        font-size: 1.6rem;
      }

      .document-content h2 {
        font-size: 1.2rem;
      }

      .document-content h3 {
        font-size: 1.1rem;
      }

      .document-content {
        font-size: 1rem;
      }

      .container {
        padding: 0 1.2rem;
      }

      .content-section {
        gap: 2rem;
      }

      .toc, .info-card {
        padding: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .document-title {
        font-size: 1.4rem;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .document-content h2 {
        margin-top: 2rem;
      }

      .document-content h3 {
        margin-top: 1.5rem;
      }

      .document-content p, .document-content li {
        font-size: 0.95rem;
      }

      .highlight {
        padding: 0.6rem 0.8rem;
      }
    }

    /* Print Styles */
    @media print {
      header, .sidebar, .footer {
        display: none;
      }

      main {
        margin-top: 0;
        padding-bottom: 0;
      }

      .document-card {
        box-shadow: none;
        border: 1px solid #ddd;
        page-break-inside: avoid;
      }

      body {
        background: white;
        color: black;
      }

      a {
        text-decoration: none;
        color: black;
      }
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .document-card, .toc, .info-card {
        animation: none;
        opacity: 1;
        transform: none;
      }

      html {
        scroll-behavior: auto;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-content">
      <div class="logo">Bot Discord — Termos e Privacidade</div>
      <nav class="nav-links">
        <a href="#termos" class="nav-link">Termos de Serviço</a>
        <a href="#privacidade" class="nav-link">Política de Privacidade</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="content-section">
        <div class="legal-documents">
          <!-- Termos de Serviço -->
          <section id="termos" class="document-card">
            <div class="document-header">
              <h1 class="document-title">Termos de Serviço</h1>
              <p class="document-subtitle">Última atualização: Março 2026</p>
            </div>

            <div class="document-content">
              <p>Este documento estabelece os termos e condições que regem o uso do bot Discord fornecido por [Nome do Desenvolvedor]. Ao convidar, utilizar ou interagir com este bot, você concorda em cumprir e estar sujeito a estes Termos de Serviço.</p>

              <div class="divider"></div>

              <h2>1. Aceitação dos Termos</h2>
              <p>Ao acessar ou utilizar o bot Discord, você declara que leu, compreendeu e concordou em estar vinculado a estes Termos de Serviço e à nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, você não deve utilizar o bot.</p>

              <h2>2. Descrição do Serviço</h2>
              <p>O bot Discord é uma ferramenta automatizada que opera dentro do Discord, oferecendo funcionalidades específicas conforme descrito em nossa documentação. O serviço inclui, mas não se limita a:</p>
              <ul>
                <li>Gerenciamento de mensagens e moderação de servidor</li>
                <li>Sistema de recompensas e níveis</li>
                <li>Integração com serviços externos autorizados</li>
                <li>Ferramentas de análise e estatísticas do servidor</li>
              </ul>

              <h2>3. Uso Aceitável</h2>
              <p>Você concorda em utilizar o bot apenas para fins legais e de acordo com estes Termos. Você não deve:</p>
              <ul>
                <li>Utilizar o bot para spam, abuso ou assédio</li>
                <li>Tentar acessar funcionalidades não autorizadas</li>
                <li>Reverser engenharia ou descompilar o bot</li>
                <li>Interferir no funcionamento do bot ou de outros serviços</li>
                <li>Utilizar o bot para atividades ilegais ou maliciosas</li>
              </ul>

              <div class="highlight">
                <p>O uso do bot para atividades que violam os Termos de Serviço do Discord resultará em proibição imediata do bot e possíveis ações legais.</p>
              </div>

              <h2>4. Propriedade Intelectual</h2>
              <p>Todos os direitos, títulos e interesses sobre o bot Discord, incluindo mas não se limitando a código-fonte, design, marca registrada e conteúdo, são de propriedade exclusiva de [Nome do Desenvolvedor].</p>

              <h2>5. Isenção de Responsabilidade</h2>
              <p>O bot é fornecido "como está" e "conforme disponível". Não garantimos que o bot esteja livre de erros, interrupções ou defeitos. Não somos responsáveis por quaisquer danos diretos, indiretos, incidentes ou consequentes decorrentes do uso ou incapacidade de usar o bot.</p>

              <h2>6. Modificações</h2>
              <p>Reservamos o direito de modificar estes Termos de Serviço a qualquer momento, sem aviso prévio. As alterações entrarão em vigor imediatamente após a publicação da versão atualizada. O uso contínuo do bot após tais modificações constitui sua aceitação dos novos termos.</p>

              <h2>7. Rescisão</h2>
              <p>Podemos suspendar ou encerrar seu acesso ao bot a qualquer momento, por qualquer motivo ou sem motivo, sem aviso prévio. Em caso de rescisão, você deve deixar de utilizar o bot imediatamente.</p>

              <h2>8. Contato</h2>
              <p>Para dúvidas sobre estes Termos de Serviço, entre em contato conosco através do servidor oficial do Discord ou pelo e-mail: [seu@email.com]</p>
            </div>
          </section>

          <!-- Política de Privacidade -->
          <section id="privacidade" class="document-card">
            <div class="document-header">
              <h1 class="document-title">Política de Privacidade</h1>
              <p class="document-subtitle">Proteção de Dados e Privacidade do Usuário</p>
            </div>

            <div class="document-content">
              <p>Nossa Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar o bot Discord. A privacidade de seus dados é de extrema importância para nós.</p>

              <div class="divider"></div>

              <h2>1. Informações Coletadas</h2>
              <p>Coletamos informações que você fornece diretamente ao utilizar o bot, incluindo:</p>
              <ul>
                <li>Identificadores do Discord (ID de usuário, nome de usuário)</li>
                <li>Configurações de servidor e preferências</li>
                <li>Mensagens e comandos processados pelo bot</li>
                <li>Dados estatísticos de uso</li>
              </ul>

              <p>Não coletamos informações sensíveis, como dados financeiros, informações de saúde ou dados biometricos.</p>

              <h2>2. Como Usamos Suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul>
                <li>Fornecer e melhorar as funcionalidades do bot</li>
                <li>Processar comandos e responder a solicitações</li>
                <li>Manter a segurança e integridade do serviço</li>
                <li>Gerar estatísticas anônimas de uso</li>
                <li>Comunicar atualizações importantes</li>
              </ul>

              <h2>3. Armazenamento e Segurança</h2>
              <p>As informações são armazenadas em servidores seguros com medidas técnicas e organizacionais apropriadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são criptografados em trânsito e em repouso.</p>

              <div class="highlight">
                <p>Os dados são retidos apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, ou conforme exigido por lei.</p>
              </div>

              <h2>4. Compartilhamento de Informações</h2>
              <p>Não vendemos nem alugamos suas informações pessoais. Podemos compartilhar dados com:</p>
              <ul>
                <li>Provedores de serviços confiáveis que auxiliam na operação do bot</li>
                <li>Autoridades competentes quando exigido por lei</li>
                <li>Terceiros com seu consentimento explícito</li>
              </ul>

              <h2>5. Seus Direitos</h2>
              <p>Você tem o direito de acessar, corrigir, excluir ou transferir suas informações pessoais. Você também pode retirar seu consentimento a qualquer momento. Para exercer estes direitos, entre em contato conosco.</p>

              <h2>6. Cookies e Tecnologias Semelhantes</h2>
              <p>O bot pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário e coletar dados de uso. A maioria dos navegadores permite recusar cookies, mas isto pode afetar a funcionalidade do bot.</p>

              <h2>7. Privacidade de Menores</h2>
              <p>Nosso serviço não é direcionado a menores de 13 anos (ou idade mínima equivalente em sua jurisdição). Não coletamos intencionalmente informações de menores. Se descobrirmos que coletamos dados de um menor, procederemos à exclusão imediata.</p>

              <h2>8. Alterações na Política</h2>
              <p>Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível aqui. Recomendamos que você revise esta política periodicamente.</p>

              <h2>9. Contato</h2>
              <p>Para perguntas sobre esta Política de Privacidade ou para exercer seus direitos de privacidade, entre em contato conosco através do servidor oficial do Discord ou pelo e-mail: [seu@email.com]</p>
            </div>
          </section>
        </div>

        <aside class="sidebar">
          <nav class="toc">
            <h3 class="toc-title">Neste Documento</h3>
            <ul class="toc-list">
              <li><a href="#termos" class="toc-link">Termos de Serviço</a></li>
              <li><a href="#privacidade" class="toc-link">Política de Privacidade</a></li>
              <li><a href="#termos" class="toc-link">— Aceitação dos Termos</a></li>
              <li><a href="#termos" class="toc-link">— Uso Aceitável</a></li>
              <li><a href="#termos" class="toc-link">— Propriedade Intelectual</a></li>
              <li><a href="#termos" class="toc-link">— Isenção de Responsabilidade</a></li>
              <li><a href="#privacidade" class="toc-link">— Informações Coletadas</a></li>
              <li><a href="#privacidade" class="toc-link">— Compartilhamento de Dados</a></li>
              <li><a href="#privacidade" class="toc-link">— Seus Direitos</a></li>
            </ul>
          </nav>

          <div class="info-card">
            <h4 class="info-title">Informações Importantes</h4>
            <div class="info-content">
              <p>Este documento é fornecido como um modelo para bots Discord. É essencial que você consulte um advogado para revisar e personalizar estes termos de acordo com suas necessidades específicas e com as leis aplicáveis em sua jurisdição.</p>
              <p>Os termos aqui apresentados são gerais e podem não cobrir todas as circunstâncias específicas do seu bot.</p>
              <p>Esta página foi projetada para ser responsiva e acessível, seguindo as melhores práticas de design web.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-links">
        <a href="#termos" class="footer-link">Termos de Serviço</a>
        <a href="#privacidade" class="footer-link">Política de Privacidade</a>
        <a href="#" class="footer-link">Voltar ao Topo</a>
      </div>
      <p>&copy; 2026 [Nome do Desenvolvedor]. Todos os direitos reservados.</p>
      <p>Este documento foi gerado para fins informativos. Consulte um profissional legal para orientação específica.</p>
    </div>
  </footer>

  <script>
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });

    // Animation on scroll using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.document-card, .toc, .info-card').forEach(el => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
  </script>
</body>
</html>
