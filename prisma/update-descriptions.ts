import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const descriptions: Record<string, string> = {
    "logitech-mx-master-3s":
        "O Logitech MX Master 3s é o mouse sem fio mais avançado para produtividade. Com sensor de 8000 DPI, rolagem MagSpeed ultrarrápida e silenciosa, conexão via Bluetooth ou receptor USB Logi Bolt, e bateria recarregável com até 70 dias de uso. Possui botões personalizáveis, scroll horizontal e design ergonômico esculpido para conforto prolongado. Compatível com até 3 dispositivos simultaneamente com troca instantânea via botão Easy-Switch.",
    "logitech-pro-x-superlight":
        "O Logitech Pro X Superlight é um dos mouses gamer mais leves do mundo, pesando menos de 63 gramas. Equipado com o sensor HERO 25K de alta precisão com até 25.600 DPI, oferece rastreamento sub-mícron sem suavização, filtragem ou aceleração. Conexão wireless LIGHTSPEED de 1ms garante desempenho sem fio equivalente ao com fio. Bateria com duração de até 70 horas e design ambidestro com pés de PTFE de nível zero para deslizamento suave.",
    "logitech-g305-lightspeed":
        "O Logitech G305 Lightspeed é um mouse gamer sem fio com tecnologia LIGHTSPEED que oferece resposta de 1ms. Utiliza o sensor HERO com até 12.000 DPI, proporcionando precisão de nível profissional. Funciona com uma única pilha AA por até 250 horas no modo de desempenho. Design compacto e leve (99g), com 6 botões programáveis e memória integrada para armazenar configurações. Ideal para gamers que buscam performance wireless a um preço acessível.",
    "hyperx-pulsefire-dart":
        "O HyperX Pulsefire Dart é um mouse gamer sem fio com sensor Pixart 3389 de até 16.000 DPI e switches Omron com vida útil de 50 milhões de cliques. Possui carregamento sem fio compatível com Qi, bateria com até 50 horas de uso e conexão wireless de 2.4GHz com latência ultrabaixa. Design ergonômico para destros com punhos laterais emborrachados, 6 botões programáveis e iluminação RGB com duas zonas personalizáveis via software HyperX NGENUITY.",
    "razer-deathadder-v2-pro":
        "O Razer DeathAdder V2 Pro é um mouse gamer sem fio com o renomado formato ergonômico DeathAdder, agora com tecnologia HyperSpeed Wireless e Bluetooth. Equipado com sensor óptico Focus+ de 20.000 DPI, switches ópticos Razer com acionamento de 0.2ms e bateria com até 120 horas de duração. Pesa apenas 88 gramas e conta com pés 100% PTFE para deslizamento suave. Armazenamento integrado de até 5 perfis e iluminação Razer Chroma RGB.",
    "logitech-mx-keys-mini":
        "O Logitech MX Keys Mini é um teclado sem fio compacto e minimalista, ideal para produtividade em espaços reduzidos. Possui teclas com formato esférico PerfectStroke para digitação confortável e precisa, retroiluminação inteligente que se adapta às condições de luz e desliga quando você se afasta. Conecta via Bluetooth Low Energy a até 3 dispositivos com troca Easy-Switch. Bateria recarregável USB-C com até 10 dias de uso (ou 5 meses sem retroiluminação). Compatível com Windows, macOS, iOS, Android e ChromeOS.",
    "logitech-mx-keys-s":
        "O Logitech MX Keys S é um teclado sem fio full-size projetado para produtividade máxima. Conta com teclas PerfectStroke com formato côncavo para digitação fluida, retroiluminação inteligente com sensor de proximidade e Smart Actions para automatizar tarefas repetitivas. Conecta-se via Bluetooth ou receptor Logi Bolt a até 3 dispositivos. Bateria recarregável USB-C com autonomia de até 10 dias com luz ou 5 meses sem. Layout completo com teclado numérico integrado.",
    "logitech-pop-keys":
        "O Logitech POP Keys é um teclado mecânico sem fio com design divertido e teclas de emoji customizáveis. Utiliza switches mecânicos táteis com feedback satisfatório, teclas arredondadas estilo máquina de escrever e cores vibrantes. Conecta via Bluetooth a até 3 dispositivos com Easy-Switch. Possui 8 teclas de emoji intercambiáveis e personalizáveis via software Logi Options+. Compacto (sem teclado numérico) e alimentado por 2 pilhas AAA com duração de até 3 anos.",
    "logitech-mx-mechanical":
        "O Logitech MX Mechanical é um teclado mecânico sem fio full-size que combina produtividade e sensação tátil premium. Disponível com switches mecânicos táteis, lineares ou clicky de baixo perfil. Possui retroiluminação inteligente com sensor de proximidade, conexão via Bluetooth ou Logi Bolt para até 3 dispositivos, e bateria recarregável USB-C com até 15 dias de uso. Teclas com formato esférico para precisão e conforto, compatível com macOS e Windows com teclas de função dedicadas.",
    "epomaker-th80":
        "O Epomaker TH80 é um teclado mecânico sem fio compacto no layout 75%, com knob rotativo para controle de volume e mídia. Possui conectividade tripla: Bluetooth 5.0, wireless 2.4GHz e USB-C com fio. Suporta hot-swap para troca fácil de switches sem solda, iluminação RGB por tecla com múltiplos efeitos e bateria de 3000mAh com até 200 horas de uso. Estrutura em plástico de alta qualidade com placa de montagem em aço, espuma de silenciamento e teclas PBT doubleshot.",
    "redragon-gamer-ashe":
        "O Redragon Gamer Ashe é um teclado mecânico gamer com switches mecânicos Blue (clicky) ou Red (linear), iluminação RGB com efeitos personalizáveis e construção robusta com base em metal. Possui layout compacto TKL (sem teclado numérico), teclas com anti-ghosting e N-Key Rollover completo para registro preciso de múltiplas teclas simultâneas. Conexão USB com cabo trançado removível, keycaps em ABS doubleshot e software para personalização de macros e iluminação.",
    "logitech-zone-vibe-100":
        "O Logitech Zone Vibe 100 é um headset sem fio leve e confortável, projetado para trabalho híbrido e uso pessoal. Pesa apenas 185g com almofadas macias over-ear e headband acolchoado para uso prolongado. Conexão Bluetooth com alcance de até 30 metros, microfone flip-to-mute com cancelamento de ruído e drivers de 40mm para áudio nítido. Bateria com até 20 horas de uso, controles intuitivos no fone e certificação para Microsoft Teams e Zoom.",
    "logitech-pro-x-2-lightspeed":
        "O Logitech Pro X 2 Lightspeed é um headset gamer profissional com tecnologia sem fio LIGHTSPEED de baixa latência, som surround DTS Headphone:X 2.0, e drivers de grafeno de 50mm para áudio de alta fidelidade. Possui microfone com tecnologia Blue VO!CE para captação vocal cristalina com filtragem em tempo real. Construção leve (320g) com almofadas de espuma viscoelástica e couro sintético, bateria de 50 horas e compatibilidade com PC, PlayStation, Nintendo Switch e dispositivos móveis.",
    "logitech-astro-a30":
        "O Logitech Astro A30 é um headset gamer premium com conectividade versátil: wireless LIGHTSPEED, Bluetooth e conexão de 3.5mm, permitindo uso simultâneo em múltiplas plataformas. Equipado com drivers de 40mm com ímãs de neodímio para som imersivo, microfone removível com isolamento de voz e design ultraleve. Bateria com até 27 horas de duração, painéis laterais intercambiáveis para personalização visual e compatibilidade com Xbox, PlayStation, PC e dispositivos móveis.",
    "logitech-zone-wired-earbuds":
        "O Logitech Zone Wired Earbuds é um fone de ouvido intra-auricular com fio projetado para videoconferências e trabalho remoto. Possui cancelamento de ruído ativo (ANC) com modo de transparência, microfone integrado com cancelamento de ruído avançado e drivers de 12mm para áudio detalhado. Conexão USB-C com DAC embutido de alta resolução, controles inline para volume e mute, e pontas de silicone em múltiplos tamanhos para vedação perfeita. Certificado para Microsoft Teams, Zoom e Google Meet.",
    "hyperx-cloud-stinger-2":
        "O HyperX Cloud Stinger 2 é um headset gamer leve e confortável, pesando apenas 275g, ideal para longas sessões de jogo. Possui drivers de 50mm com câmaras de som DTS Headphone:X para áudio espacial imersivo, microfone giratório com cancelamento de ruído e função mute ao levantar. Almofadas de espuma viscoelástica com revestimento em couro sintético respirável, headband em aço flexível com ajuste rotacional de 90° e conexão de 3.5mm compatível com PC, PS4, PS5, Xbox e Nintendo Switch.",
    "razer-kraken-x":
        "O Razer Kraken X é um headset gamer ultraleve com apenas 250g, projetado para conforto em longas maratonas de jogos. Conta com drivers customizados de 40mm com som surround 7.1 virtual para posicionamento de áudio preciso em jogos. Microfone cardioide flexível com isolamento de ruído para comunicação clara, headband acolchoado com almofadas de tecido macio e isolamento de ruído passivo. Conexão via cabo de 3.5mm com compatibilidade multiplataforma para PC, Mac, PS4, Xbox One e Switch.",
    "logitech-powerplay":
        "O Logitech Powerplay é um sistema de mousepad com carregamento sem fio contínuo para mouses compatíveis da linha Logitech G, como o G Pro X Superlight e G502 X. Utiliza a tecnologia LIGHTSPEED para carregar o mouse durante o uso, eliminando a necessidade de cabos ou pausas para recarga. Inclui duas superfícies intercambiáveis: tecido macio para controle e superfície rígida para velocidade. Dimensões de 321x344mm com base fina e elegante que integra perfeitamente ao setup.",
    "logitech-desk-mat":
        "O Logitech Desk Mat é um tapete de mesa estendido que protege sua mesa enquanto oferece uma superfície ampla e uniforme para mouse e teclado. Com dimensões generosas de 700x300mm, possui superfície de tecido macio resistente a respingos com bordas costuradas anti-desgaste. Base de borracha antiderrapante mantém o mat fixo durante o uso. Design minimalista disponível em múltiplas cores, ideal para quem busca organização e estética no setup de trabalho ou gaming.",
    "logitech-g740":
        "O Logitech G740 é um mousepad gamer de tecido grosso (5mm) otimizado para sensores de alta precisão. Sua superfície de tecido de malha fina oferece a quantidade ideal de fricção para movimentos rápidos e paradas precisas, ideal para jogos FPS. Com dimensões de 460x400mm, oferece amplo espaço para movimentos de baixa sensibilidade. Base de borracha natural garante estabilidade total e as bordas são tratadas para durabilidade. Textura consistente que mantém o desempenho do sensor em toda a área.",
    "logitech-mousepad-studio-series":
        "O Logitech Mousepad Studio Series é um mousepad premium com design elegante e moderno para ambientes de trabalho. Superfície de tecido antiderrapante com tratamento anti-respingos que facilita a limpeza. Base de borracha que mantém o pad firmemente no lugar, bordas planas sem elevação para conforto do pulso e dimensões compactas ideais para mesas organizadas. Disponível em cores neutras e sofisticadas que combinam com qualquer decoração de escritório. Espessura fina para um perfil discreto.",
    "force-one-skyhawk-dark":
        "O Force One Skyhawk Dark é um mousepad gamer extended na cor preta com superfície de tecido speed otimizada para movimentos rápidos e precisos. Com dimensões de 900x400mm, cobre toda a área de teclado e mouse. Possui bordas costuradas reforçadas para maior durabilidade, base emborrachada antiderrapante de 4mm de espessura e superfície impermeável resistente a líquidos. Ideal para jogadores de FPS e MMO que precisam de amplo espaço para movimentação com baixa sensibilidade.",
    "force-one-skyhawk-snow":
        "O Force One Skyhawk Snow é a versão branca do mousepad gamer extended Skyhawk, com superfície de tecido speed de alta performance para deslizamento suave e preciso. Dimensões de 900x400mm com 4mm de espessura, bordas costuradas resistentes a desgaste e base emborrachada antiderrapante. Superfície impermeável para proteção contra respingos e fácil limpeza. O design branco clean combina com setups de cor clara e oferece excelente rastreamento para sensores ópticos e laser.",
    "dell-s2421hn":
        "O Dell S2421HN é um monitor de 24 polegadas Full HD (1920x1080) com painel IPS para cores vibrantes e ângulos de visão amplos de 178°. Taxa de atualização de 75Hz com AMD FreeSync para gameplay suave sem tearing. Design de bordas ultrafinas em 3 lados (InfinityEdge) para experiência imersiva em configurações multi-monitor. Conectividade com 2x HDMI 1.4, suporte ajustável em inclinação e tecnologia ComfortView para redução de luz azul. Tempo de resposta de 4ms (GtG).",
    "dell-p2422h":
        "O Dell P2422H é um monitor profissional de 24 polegadas Full HD (1920x1080) com painel IPS e cobertura de 99% sRGB para precisão de cores em trabalhos criativos. Suporte totalmente ajustável em altura, rotação, inclinação e pivot (retrato/paisagem). Conectividade completa com DisplayPort 1.2, HDMI 1.4, VGA e 4 portas USB 3.2. Certificação TÜV para redução de luz azul e livre de cintilação (flicker-free). Design compacto com bordas ultrafinas e gerenciamento de cabos integrado.",
    "dell-p2723qe":
        "O Dell P2723QE é um monitor profissional de 27 polegadas com resolução 4K UHD (3840x2160) e painel IPS com 99% sRGB. Destaque para a conectividade USB-C com fornecimento de até 90W de energia, permitindo carregar notebooks enquanto exibe a imagem com um único cabo. Hub USB integrado com portas USB-A e USB-C downstream, além de DisplayPort 1.2, HDMI e RJ45 Ethernet. Suporte ergonômico completo com ajuste de altura, inclinação, giro e pivot.",
    "dell-s3422dwg":
        "O Dell S3422DWG é um monitor gamer curvo de 34 polegadas ultrawide WQHD (3440x1440) com painel VA e curvatura 1800R para imersão total. Taxa de atualização de 144Hz com AMD FreeSync Premium e tempo de resposta de 2ms (MPRT) para jogabilidade fluida. HDR 400 com cobertura de 90% DCI-P3 para cores cinematográficas. Conectividade com 2x HDMI 2.0, DisplayPort 1.4 e 5x USB. Alto-falantes integrados de 5W, suporte ajustável e iluminação ambiente na parte traseira.",
    "dell-s3222dgm":
        "O Dell S3222DGM é um monitor gamer curvo de 32 polegadas QHD (2560x1440) com painel VA e curvatura 1000R para máxima imersão. Taxa de atualização de 165Hz com AMD FreeSync Premium e tempo de resposta de 2ms para ação sem borrões. Contraste de 3000:1 nativo para pretos profundos e detalhes em cenas escuras. Cobertura de 99% sRGB, conectividade com 2x HDMI 2.0 e DisplayPort 1.2, e design com bordas ultrafinas em 3 lados. Suporte com ajuste de altura e inclinação.",
    "dell-aw2524hf":
        "O Dell Alienware AW2524HF é um monitor gamer de 25 polegadas Full HD (1920x1080) com painel IPS de 500Hz, um dos mais rápidos do mundo, projetado para eSports competitivo. Tempo de resposta de 0.5ms (GtG) com AMD FreeSync Premium e compatibilidade G-Sync. Cobertura de 99% sRGB com Delta E<2, iluminação AlienFX RGB personalizável na parte traseira, suporte totalmente ajustável e design Alienware Legend 3.0. Ideal para jogadores profissionais que exigem a máxima taxa de quadros.",
    "logitech-surround-sound-z607":
        "O Logitech Z607 é um sistema de som surround 5.1 com 160W de potência de pico para áudio envolvente em filmes, músicas e jogos. Inclui 5 caixas satélite e subwoofer dedicado para graves profundos. Conectividade versátil com Bluetooth, entrada de 3.5mm, RCA e USB para múltiplas fontes de áudio. Controle remoto sem fio para ajuste de volume, graves e seleção de entrada à distância. Configuração simplificada com cabos codificados por cores e display no painel do subwoofer.",
    "logitech-dock":
        "O Logitech Dock é uma estação de trabalho all-in-one que combina speakerphone de alta qualidade com hub USB-C para simplificar seu setup. Possui alto-falante com cancelamento de ruído e microfones beamforming para chamadas cristalinas, além de hub com 5 portas USB, HDMI, DisplayPort e carregamento de 100W via USB-C. Integração com calendário para notificações visuais de reuniões via luz LED e gerenciamento via Logi Tune. Design elegante que organiza cabos e centraliza conectividade.",
    "sony-sa-z9r-speakers":
        "O Sony SA-Z9R é um par de caixas de som surround traseiras projetadas para complementar soundbars Sony compatíveis, criando uma experiência de home theater envolvente. Conectam-se sem fio ao receiver/soundbar para áudio surround 5.1 real sem necessidade de cabos longos pela sala. Cada caixa possui driver full-range com potência dedicada, design compacto e discreto que se integra à decoração, e configuração automática via wireless. Perfeitas para criar imersão em filmes e games.",
    "sony-xb43-extra-bass":
        "O Sony SRS-XB43 Extra Bass é uma caixa de som Bluetooth portátil com graves potentes impulsionados pela tecnologia X-Balanced Speaker Unit. Possui classificação IP67 para resistência à água, poeira e ferrugem, sendo ideal para uso externo. Bateria com até 24 horas de duração, iluminação LED multicolorida que pulsa com a música e função Party Connect para emparelhar mais de 100 caixas. NFC para pareamento rápido, entrada auxiliar de 3.5mm e porta USB-A para carregar dispositivos.",
    "sony-xb23-extra-bass":
        "O Sony SRS-XB23 Extra Bass é uma caixa de som Bluetooth portátil compacta com formato cilíndrico e graves intensos via processador X-Balanced Speaker Unit. Resistência IP67 contra água e poeira, bateria com até 12 horas de reprodução e tecnologia Bluetooth 5.0 com codec LDAC para áudio de alta resolução. Microfone integrado para chamadas, função Party Connect para conectar múltiplas caixas e design leve (580g) com alça integrada para transporte fácil. Disponível em várias cores.",
    "sony-ht-s200f-soundbar":
        "A Sony HT-S200F é uma soundbar compacta 2.1 canais com subwoofer embutido que entrega graves surpreendentes sem necessidade de caixa de subwoofer separada. Potência total de 80W com tecnologia S-Force PRO Front Surround para efeito de áudio envolvente. Conectividade via HDMI ARC, Bluetooth, USB e entrada óptica digital. Compatível com Dolby Digital para áudio cinematográfico e modo de voz dedicado para diálogos claros. Design slim que combina com TVs de qualquer tamanho e montagem em parede inclusa.",
};

async function main() {
    console.log("Atualizando descrições dos produtos...\n");

    let updated = 0;
    let notFound = 0;

    for (const [slug, description] of Object.entries(descriptions)) {
        const result = await prisma.product.updateMany({
            where: { slug },
            data: { description },
        });

        if (result.count > 0) {
            updated++;
            console.log(`✓ ${slug}`);
        } else {
            notFound++;
            console.log(`✗ ${slug} (não encontrado)`);
        }
    }

    console.log(`\nConcluído! ${updated} atualizados, ${notFound} não encontrados.`);
}

main()
    .catch((e) => {
        console.error("Erro:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
