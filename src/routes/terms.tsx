import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — farmsilo" },
      { name: "description", content: "Termos de Uso do aplicativo Farmsilo." },
      { property: "og:title", content: "Termos de Uso — farmsilo" },
      { property: "og:description", content: "Termos de Uso do aplicativo Farmsilo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" className="mb-6 text-primary" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o início
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Termos de Uso</h1>
        <p className="mt-4 text-muted-foreground">
          Leia nossos termos de uso para garantir uma experiência segura e transparente no aplicativo Farmsilo.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 17 de maio de 2025</p>

        <div className="mt-10 space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground">
              Bem-vindo ao Farmsilo! Estes Termos de Uso regem seu acesso ao nosso aplicativo, incluindo quaisquer
              conteúdos, funcionalidades e serviços oferecidos.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ao acessar ou utilizar o aplicativo Farmsilo, você concorda em cumprir e ficar vinculado a estes Termos.
              Se você não concordar com qualquer parte destes Termos, não poderá acessar ou utilizar nosso aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">1. Quem Somos</h2>
            <p className="mt-2 text-muted-foreground">
              Farmsilo é uma rede social que facilita a comunicação entre produtores e profissionais para divulgação de
              produtos e serviços através de um aplicativo móvel. Nossa plataforma permite que usuários criem perfis,
              postem fotos e vídeos, e anunciem produtos e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Elegibilidade</h2>
            <p className="mt-2 text-muted-foreground">Para utilizar o aplicativo Farmsilo, você deve:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Ter pelo menos 16 anos de idade, de acordo com a classificação indicativa recomendada para o aplicativo;</li>
              <li>Não ter sido previamente suspenso ou removido do Farmsilo;</li>
              <li>
                O Farmsilo é voltado especialmente para pessoas interessadas no setor de agronegócio, mas está aberto a
                todos os usuários que queiram explorar suas funcionalidades.
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Ao criar uma conta, você confirma que atende a todos esses requisitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Cadastro e Conta</h2>
            <h3 className="mt-3 font-semibold text-foreground">3.1. Criação de conta</h3>
            <p className="mt-2 text-muted-foreground">
              Para acessar determinadas funcionalidades do aplicativo, você precisará criar uma conta. Durante o processo
              de cadastro, você deverá fornecer informações precisas, completas e atualizadas. Você é responsável por
              manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorrerem em sua
              conta.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">3.2. Segurança da conta</h3>
            <p className="mt-2 text-muted-foreground">Você concorda em:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Criar uma senha forte e mantê-la segura;</li>
              <li>Não compartilhar sua conta com terceiros;</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta;</li>
              <li>Fazer logout de sua conta ao final de cada sessão.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">3.3. Encerramento de conta</h3>
            <p className="mt-2 text-muted-foreground">
              Você pode encerrar sua conta a qualquer momento através das configurações do aplicativo. Reservamo-nos o
              direito de suspender ou encerrar sua conta se você violar estes Termos ou se detectarmos atividades
              suspeitas ou fraudulentas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Uso do Aplicativo</h2>
            <h3 className="mt-3 font-semibold text-foreground">4.1. Licença limitada</h3>
            <p className="mt-2 text-muted-foreground">
              Concedemos a você uma licença limitada, não exclusiva, não transferível e revogável para acessar e utilizar
              o aplicativo Farmsilo para fins pessoais e profissionais relacionados ao agronegócio, sujeita a estes
              Termos.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">4.2. Restrições de uso</h3>
            <p className="mt-2 text-muted-foreground">Você concorda em não:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Utilizar o aplicativo para qualquer finalidade ilegal ou não autorizada;</li>
              <li>Violar quaisquer leis aplicáveis no uso do aplicativo;</li>
              <li>Modificar, adaptar, traduzir ou fazer engenharia reversa de qualquer parte do aplicativo;</li>
              <li>Remover ou alterar quaisquer direitos autorais, marcas registradas ou outros avisos proprietários;</li>
              <li>Interferir ou interromper o funcionamento do aplicativo ou servidores;</li>
              <li>Introduzir vírus, trojans, worms, bombas lógicas ou outros materiais maliciosos;</li>
              <li>Coletar ou rastrear informações pessoais de outros usuários;</li>
              <li>Tentar acessar áreas restritas do aplicativo sem autorização.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Acesso a Sites e Serviços Externos</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo Farmsilo pode disponibilizar links de acesso a sites e serviços de terceiros, incluindo, mas
              não se limitando, às funcionalidades de <strong>Clima</strong>, <strong>Commodities</strong> e{" "}
              <strong>Pragas e doenças</strong>.
            </p>
            <p className="mt-4 text-muted-foreground">
              Esses serviços são fornecidos por terceiros e não possuem vínculo com o aplicativo Farmsilo. A Farmsilo não
              se responsabiliza por quaisquer ocorrências, conteúdos, dados ou problemas causados pelo acesso a esses
              sites ou serviços externos. Ao continuar e utilizar esses links, você está ciente e concorda com esses
              termos, assumindo total responsabilidade pelas suas interações com os referidos serviços de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Conteúdo do Usuário</h2>
            <h3 className="mt-3 font-semibold text-foreground">6.1. Propriedade do conteúdo</h3>
            <p className="mt-2 text-muted-foreground">
              Você mantém todos os direitos sobre o conteúdo que publica no Farmsilo, incluindo textos, fotos, vídeos e
              anúncios ("Conteúdo do Usuário"). Ao publicar Conteúdo do Usuário, você concede ao Farmsilo uma licença
              mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir,
              distribuir, preparar trabalhos derivados, exibir e executar o Conteúdo do Usuário em conexão com o
              aplicativo e os negócios do Farmsilo.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">6.2. Responsabilidade pelo conteúdo</h3>
            <p className="mt-2 text-muted-foreground">
              Você é o único responsável por todo o Conteúdo do Usuário que publica ou compartilha através do aplicativo.
              Você declara e garante que:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                Possui ou tem as licenças, direitos, consentimentos e permissões necessárias para publicar o Conteúdo do
                Usuário;
              </li>
              <li>
                O Conteúdo do Usuário não viola direitos de terceiros, incluindo direitos autorais, marcas registradas,
                privacidade ou outros direitos pessoais ou proprietários;
              </li>
              <li>O Conteúdo do Usuário não contém material difamatório, calunioso, ofensivo, indecente ou ilegal;</li>
              <li>
                O Conteúdo do Usuário não inclui informações falsas ou enganosas, especialmente em relação a produtos e
                serviços anunciados.
              </li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">6.3. Conteúdo proibido</h3>
            <p className="mt-2 text-muted-foreground">Você concorda em não publicar Conteúdo do Usuário que:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                Seja ilegal, prejudicial, ameaçador, abusivo, assediador, difamatório, vulgar, obsceno, pornográfico ou
                ofensivo;
              </li>
              <li>Promova discriminação, intolerança, racismo, ódio ou violência contra qualquer indivíduo ou grupo;</li>
              <li>Viole direitos de propriedade intelectual de terceiros;</li>
              <li>
                Contenha informações falsas ou enganosas sobre produtos agrícolas, insumos, maquinário ou serviços;
              </li>
              <li>Promova atividades ilegais ou substâncias controladas;</li>
              <li>Explore ou prejudique menores;</li>
              <li>
                Contenha software malicioso ou código destinado a interromper, danificar ou limitar o funcionamento de
                qualquer software ou hardware.
              </li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">6.4. Monitoramento e remoção de conteúdo</h3>
            <p className="mt-2 text-muted-foreground">
              Reservamo-nos o direito, mas não a obrigação, de monitorar, revisar e remover qualquer Conteúdo do Usuário
              que viole estes Termos ou que consideremos, a nosso critério exclusivo, questionável ou ofensivo. Podemos
              remover ou recusar a exibição de qualquer Conteúdo do Usuário sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Anúncios e Comercialização</h2>
            <h3 className="mt-3 font-semibold text-foreground">7.1. Anúncios de produtos e serviços</h3>
            <p className="mt-2 text-muted-foreground">
              O Farmsilo permite que usuários publiquem anúncios para comercialização de produtos e serviços. Ao publicar
              anúncios, você concorda em:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Fornecer informações precisas e completas sobre os produtos ou serviços anunciados;</li>
              <li>Ter o direito legal de vender ou promover os produtos ou serviços anunciados;</li>
              <li>
                Cumprir todas as leis e regulamentos aplicáveis, incluindo aqueles relacionados à publicidade, rotulagem e
                segurança de produtos;
              </li>
              <li>Não anunciar produtos proibidos, ilegais ou restritos sem as devidas autorizações;</li>
              <li>Assumir total responsabilidade pela qualidade, segurança e legalidade dos produtos ou serviços anunciados.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">7.2. Transações entre usuários</h3>
            <p className="mt-2 text-muted-foreground">
              O Farmsilo atua apenas como uma plataforma para conectar compradores e vendedores. Não somos parte em
              quaisquer transações entre usuários e não temos controle sobre a qualidade, segurança, legalidade ou
              disponibilidade dos itens anunciados.
            </p>
            <p className="mt-2 text-muted-foreground">Todas as transações são realizadas diretamente entre os usuários. Você reconhece e concorda que:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>É responsável por verificar a identidade e credibilidade de outros usuários antes de realizar transações;</li>
              <li>Deve exercer cautela e bom senso ao realizar transações;</li>
              <li>O Farmsilo não garante a conclusão bem-sucedida de qualquer transação;</li>
              <li>O Farmsilo não é responsável por disputas entre usuários relacionadas a transações.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Propriedade Intelectual</h2>
            <h3 className="mt-3 font-semibold text-foreground">8.1. Propriedade do Farmsilo</h3>
            <p className="mt-2 text-muted-foreground">
              O aplicativo Farmsilo, incluindo seu conteúdo, recursos e funcionalidades, é de propriedade do Farmsilo e
              está protegido por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              Nosso logotipo, nome comercial, design de produto e outros elementos distintivos são marcas registradas do
              Farmsilo.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">8.2. Uso de propriedade intelectual</h3>
            <p className="mt-2 text-muted-foreground">
              Você não pode usar, copiar, reproduzir, distribuir, transmitir, difundir, exibir, vender, licenciar ou
              explorar de qualquer outra forma o aplicativo ou qualquer conteúdo do Farmsilo sem nossa permissão prévia
              por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Limitação de Responsabilidade</h2>
            <p className="mt-2 text-muted-foreground">Na extensão máxima permitida por lei:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                O aplicativo Farmsilo é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo,
                expressas ou implícitas;
              </li>
              <li>Não garantimos que o aplicativo será ininterrupto, oportuno, seguro ou livre de erros;</li>
              <li>Não somos responsáveis por quaisquer perdas ou danos resultantes do uso ou incapacidade de usar o aplicativo;</li>
              <li>Não somos responsáveis pela conduta de qualquer usuário do aplicativo;</li>
              <li>Não somos responsáveis por quaisquer transações ou acordos entre usuários;</li>
              <li>
                Nossa responsabilidade total por quaisquer reclamações relacionadas a estes Termos ou ao aplicativo não
                excederá o valor pago por você (se houver) pelo uso do aplicativo nos últimos 12 meses.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Indenização</h2>
            <p className="mt-2 text-muted-foreground">
              Você concorda em indenizar, defender e isentar o Farmsilo, seus diretores, funcionários, agentes e parceiros
              de e contra quaisquer reclamações, responsabilidades, danos, perdas e despesas, incluindo honorários
              advocatícios razoáveis, decorrentes de ou relacionados a:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Seu acesso ou uso do aplicativo;</li>
              <li>Violação destes Termos;</li>
              <li>Violação de direitos de terceiros, incluindo direitos de propriedade intelectual;</li>
              <li>Seu Conteúdo do Usuário;</li>
              <li>Quaisquer transações ou interações com outros usuários.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Modificações dos Termos</h2>
            <p className="mt-2 text-muted-foreground">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento, a nosso critério exclusivo. As
              alterações entrarão em vigor imediatamente após a publicação dos Termos atualizados no aplicativo. É sua
              responsabilidade revisar periodicamente estes Termos. O uso continuado do aplicativo após a publicação de
              Termos modificados constitui aceitação dessas alterações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. Lei Aplicável e Resolução de Disputas</h2>
            <p className="mt-2 text-muted-foreground">
              Estes Termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente ou
              relacionada a estes Termos ou ao uso do aplicativo será submetida à jurisdição exclusiva dos tribunais
              brasileiros.
            </p>
            <p className="mt-2 text-muted-foreground">
              Antes de iniciar qualquer ação legal, você concorda em tentar resolver a disputa informalmente entrando em
              contato conosco. Se não pudermos resolver a disputa informalmente, ambas as partes concordam em tentar
              resolver a disputa através de mediação antes de recorrer ao litígio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">13. Disposições Gerais</h2>
            <h3 className="mt-3 font-semibold text-foreground">13.1. Acordo integral</h3>
            <p className="mt-2 text-muted-foreground">
              Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo integral entre você e o
              Farmsilo em relação ao uso do aplicativo e substituem quaisquer acordos anteriores ou contemporâneos.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">13.2. Renúncia e separabilidade</h3>
            <p className="mt-2 text-muted-foreground">
              A falha do Farmsilo em fazer valer qualquer direito ou disposição destes Termos não constituirá uma
              renúncia a tal direito ou disposição. Se qualquer disposição destes Termos for considerada inválida ou
              inexequível, as demais disposições permanecerão em pleno vigor e efeito.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">13.3. Cessão</h3>
            <p className="mt-2 text-muted-foreground">
              Você não pode ceder ou transferir estes Termos, por força de lei ou de outra forma, sem nosso consentimento
              prévio por escrito. Qualquer tentativa de cessão sem tal consentimento será nula. Podemos ceder ou
              transferir estes Termos, a nosso critério exclusivo, sem restrições.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">14. Como Entrar em Contato</h2>
            <p className="mt-2 text-muted-foreground">
              Se você tiver dúvidas sobre estes Termos, entre em contato conosco pelo e-mail{" "}
              <a href="mailto:contato@farmsilo.net" className="text-primary hover:underline">
                contato@farmsilo.net
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              © 2025 Farmsilo. Todos os direitos reservados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
