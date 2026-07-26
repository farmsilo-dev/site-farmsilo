import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — farmsilo" },
      { name: "description", content: "Política de Privacidade do aplicativo Farmsilo." },
      { property: "og:title", content: "Política de Privacidade — farmsilo" },
      { property: "og:description", content: "Política de Privacidade do aplicativo Farmsilo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" className="mb-6 text-primary" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o início
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Política de Privacidade</h1>
        <p className="mt-4 text-muted-foreground">
          Conheça nossa política de privacidade e como protegemos suas informações no aplicativo Farmsilo.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: 17 de maio de 2025</p>

        <div className="mt-10 space-y-8 text-foreground">
          <section>
            <p className="text-muted-foreground">
              Bem-vindo à Política de Privacidade do aplicativo Farmsilo. Nós respeitamos sua privacidade e estamos
              comprometidos em proteger seus dados pessoais. Esta política de privacidade descreve como coletamos,
              usamos, processamos e compartilhamos suas informações quando você utiliza nosso aplicativo e serviços.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ao utilizar o aplicativo Farmsilo, você concorda com a coleta e uso de informações de acordo com esta
              política. Recomendamos a leitura completa deste documento para entender nossas práticas em relação aos seus
              dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">1. Quem Somos</h2>
            <p className="mt-2 text-muted-foreground">
              Farmsilo é uma rede social que facilita a comunicação entre produtores e profissionais para divulgação de
              produtos e serviços através de um aplicativo móvel. Nossa plataforma permite que usuários criem perfis,
              postem fotos e vídeos, e anunciem produtos e serviços relacionados ao agronegócio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Informações que Coletamos</h2>
            <p className="mt-2 text-muted-foreground">
              Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços.
            </p>
            <h3 className="mt-3 font-semibold text-foreground">2.1. Informações que você nos fornece</h3>
            <p className="mt-2 text-muted-foreground">
              Quando você se cadastra e utiliza o Farmsilo, podemos coletar as seguintes informações:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Informações de cadastro: nome completo, endereço de e-mail, senha, número de telefone, foto de perfil;</li>
              <li>Informações de perfil: dados profissionais, área de atuação, localização, biografia, interesses;</li>
              <li>
                Conteúdo gerado pelo usuário: publicações, fotos, vídeos, comentários, mensagens, anúncios de produtos e
                serviços;
              </li>
              <li>Informações de contato: mensagens enviadas para outros usuários ou para nossa equipe de suporte;</li>
              <li>Informações de transações: dados relacionados a anúncios, compras ou vendas realizadas através da plataforma.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">2.2. Informações coletadas automaticamente</h3>
            <p className="mt-2 text-muted-foreground">Quando você utiliza nosso aplicativo, coletamos automaticamente:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Informações do dispositivo: modelo, sistema operacional, identificadores únicos, configurações de rede;</li>
              <li>Dados de uso: interações com o aplicativo, tempo de uso, padrões de navegação;</li>
              <li>Dados de localização: localização geográfica (se autorizado por você);</li>
              <li>Cookies e tecnologias semelhantes: informações armazenadas em seu dispositivo para melhorar sua experiência.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Como Usamos Suas Informações</h2>
            <p className="mt-2 text-muted-foreground">Utilizamos as informações coletadas para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Fornecer, manter e melhorar nossos serviços;</li>
              <li>Criar e gerenciar sua conta e perfil;</li>
              <li>Processar e facilitar a comunicação entre usuários;</li>
              <li>Personalizar sua experiência e mostrar conteúdo relevante;</li>
              <li>Facilitar a divulgação e comercialização de produtos e serviços;</li>
              <li>Enviar notificações, atualizações e informações relacionadas ao serviço;</li>
              <li>Analisar tendências de uso e melhorar a funcionalidade do aplicativo;</li>
              <li>Detectar, prevenir e resolver problemas técnicos, fraudes ou atividades ilegais;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Compartilhamento de Informações</h2>
            <p className="mt-2 text-muted-foreground">Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
            <h3 className="mt-3 font-semibold text-foreground">4.1. Com outros usuários</h3>
            <p className="mt-2 text-muted-foreground">
              As informações que você compartilha publicamente em seu perfil, publicações, comentários e anúncios ficam
              visíveis para outros usuários da plataforma, conforme suas configurações de privacidade.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">4.2. Com prestadores de serviços</h3>
            <p className="mt-2 text-muted-foreground">
              Podemos compartilhar informações com terceiros que nos auxiliam na operação do aplicativo, como provedores
              de hospedagem, processamento de pagamentos, análise de dados e atendimento ao cliente. Esses prestadores de
              serviços têm acesso limitado às suas informações e são contratualmente obrigados a protegê-las.
            </p>
            <h3 className="mt-4 font-semibold text-foreground">4.3. Por motivos legais</h3>
            <p className="mt-2 text-muted-foreground">Podemos divulgar suas informações quando acreditarmos, de boa-fé, que tal divulgação é necessária para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Cumprir uma obrigação legal, regulatória ou processo judicial;</li>
              <li>Proteger os direitos, propriedade ou segurança da Farmsilo, nossos usuários ou o público;</li>
              <li>Detectar, prevenir ou investigar fraudes, abusos ou atividades ilegais;</li>
              <li>Fazer cumprir nossos Termos de Uso ou outros acordos.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-foreground">4.4. Em caso de transferência de negócios</h3>
            <p className="mt-2 text-muted-foreground">
              Se a Farmsilo estiver envolvida em uma fusão, aquisição ou venda de ativos, suas informações podem ser
              transferidas como parte desse processo. Notificaremos você sobre qualquer mudança de propriedade ou uso de
              suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Seus Direitos e Escolhas</h2>
            <p className="mt-2 text-muted-foreground">
              De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras leis aplicáveis, você tem os seguintes
              direitos:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Acesso: solicitar acesso às suas informações pessoais;</li>
              <li>Correção: solicitar a correção de informações imprecisas ou incompletas;</li>
              <li>Exclusão: solicitar a exclusão de suas informações pessoais;</li>
              <li>Restrição: solicitar a limitação do processamento de suas informações;</li>
              <li>Portabilidade: receber suas informações em formato estruturado e transferível;</li>
              <li>Oposição: opor-se ao processamento de suas informações para determinadas finalidades;</li>
              <li>Revogação de consentimento: retirar seu consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Para exercer esses direitos, entre em contato conosco através dos canais indicados na seção "Como Entrar em
              Contato".
            </p>
            <h3 className="mt-4 font-semibold text-foreground">5.1. Configurações de privacidade</h3>
            <p className="mt-2 text-muted-foreground">
              O aplicativo Farmsilo oferece configurações que permitem controlar a visibilidade de seu perfil,
              publicações e informações pessoais. Recomendamos revisar regularmente suas configurações de privacidade para
              garantir que estejam de acordo com suas preferências.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Segurança de Dados</h2>
            <p className="mt-2 text-muted-foreground">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso
              não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet
              ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
            </p>
            <p className="mt-2 text-muted-foreground">Algumas das medidas que adotamos incluem:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Criptografia de dados sensíveis;</li>
              <li>Controles de acesso rigorosos;</li>
              <li>Monitoramento regular de sistemas;</li>
              <li>Treinamento de segurança para nossa equipe.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Retenção de Dados</h2>
            <p className="mt-2 text-muted-foreground">
              Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas nesta
              Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              Quando não tivermos mais necessidade legítima de processar suas informações, as excluiremos ou
              anonimizaremos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Transferências Internacionais</h2>
            <p className="mt-2 text-muted-foreground">
              Suas informações podem ser transferidas e processadas em servidores localizados fora do seu país de
              residência, onde as leis de proteção de dados podem ser diferentes. Ao utilizar nossos serviços, você
              concorda com essa transferência. Tomaremos medidas para garantir que suas informações continuem protegidas
              de acordo com esta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Acesso a Sites e Serviços Externos</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo Farmsilo pode direcionar você a sites e serviços de terceiros, como as funcionalidades de{" "}
              <strong>Clima</strong>, <strong>Commodities</strong> e <strong>Pragas e doenças</strong>.
            </p>
            <p className="mt-4 text-muted-foreground">
              Esses serviços são operados por terceiros e não possuem vínculo com o Farmsilo. A Farmsilo não se
              responsabiliza pela coleta, uso, segurança ou vazamento de dados que possam ocorrer em tais sites externos,
              nem por quaisquer ocorrências, conteúdos ou problemas decorrentes do acesso a eles. Recomendamos que você
              leia as políticas de privacidade e termos de uso de cada serviço de terceiro antes de utilizá-lo. Ao
              acessar esses links, você está ciente e concorda com esses termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Privacidade de Crianças</h2>
            <p className="mt-2 text-muted-foreground">
              O aplicativo Farmsilo não é destinado a menores de 16 anos, de acordo com a classificação indicativa
              recomendada. Não coletamos intencionalmente informações pessoais de crianças. Se descobrirmos que coletamos
              informações pessoais de um menor de 16 anos sem verificação de consentimento parental, tomaremos medidas
              para remover essas informações de nossos servidores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Alterações nesta Política</h2>
            <p className="mt-2 text-muted-foreground">
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações
              significativas publicando a nova Política de Privacidade no aplicativo e, quando apropriado, enviando uma
              notificação. Recomendamos revisar esta política regularmente para estar ciente de quaisquer alterações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. Como Entrar em Contato</h2>
            <p className="mt-2 text-muted-foreground">
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao
              processamento de suas informações pessoais, entre em contato conosco pelo e-mail{" "}
              <a href="mailto:contato@farmsilo.net" className="text-primary hover:underline">
                contato@farmsilo.net
              </a>
              . Responderemos à sua solicitação dentro do prazo estabelecido pela legislação aplicável.
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
