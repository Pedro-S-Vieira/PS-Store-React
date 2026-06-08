import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        const mousesCategory = await prisma.category.create({
            data: {
                name: "Mouses",
                slug: "mouses",
                imageUrl:
                    "https://utfs.io/f/857ace02-31c2-43ae-a6f3-7d97b0cb279a-e7tkok.png",
            },
        });

        const mouses = [
            {
                name: "Logitech MX Master 3s",
                slug: "logitech-mx-master-3s",
                description:
                    "O Logitech MX Master 3s é o mouse sem fio mais avançado para produtividade. Com sensor de 8000 DPI, rolagem MagSpeed ultrarrápida e silenciosa, conexão via Bluetooth ou receptor USB Logi Bolt, e bateria recarregável com até 70 dias de uso. Possui botões personalizáveis, scroll horizontal e design ergonômico esculpido para conforto prolongado. Compatível com até 3 dispositivos simultaneamente com troca instantânea via botão Easy-Switch.",
                imageUrls: [
                    "https://utfs.io/f/baccd841-5118-4a43-b7d9-557effb39e03-otetkp.png",
                    "https://utfs.io/f/74ce5572-0cd2-4e90-a4b2-b982fb968e93-x6ep3u.png",
                    "https://utfs.io/f/0a79c814-eb1b-49cf-a8cf-073b69f2bfb4-thphc5.png",
                    "https://utfs.io/f/8453c879-dd66-41ff-b686-f564af33f324-l4plt0.png",
                ],
                basePrice: 650,
                categoryId: mousesCategory.id,
                discountPercent: 10,
            },
            {
                name: "Logitech Pro X Superlight",
                slug: "logitech-pro-x-superlight",
                description:
                    "O Logitech Pro X Superlight é um dos mouses gamer mais leves do mundo, pesando menos de 63 gramas. Equipado com o sensor HERO 25K de alta precisão com até 25.600 DPI, oferece rastreamento sub-mícron sem suavização, filtragem ou aceleração. Conexão wireless LIGHTSPEED de 1ms garante desempenho sem fio equivalente ao com fio. Bateria com duração de até 70 horas e design ambidestro com pés de PTFE de nível zero para deslizamento suave.",
                imageUrls: [
                    "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
                    "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
                    "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
                    "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
                ],
                basePrice: 750,
                categoryId: mousesCategory.id,
                discountPercent: 5,
            },
            {
                name: "Logitech G305 Lightspeed",
                slug: "logitech-g305-lightspeed",
                description:
                    "O Logitech G305 Lightspeed é um mouse gamer sem fio com tecnologia LIGHTSPEED que oferece resposta de 1ms. Utiliza o sensor HERO com até 12.000 DPI, proporcionando precisão de nível profissional. Funciona com uma única pilha AA por até 250 horas no modo de desempenho. Design compacto e leve (99g), com 6 botões programáveis e memória integrada para armazenar configurações. Ideal para gamers que buscam performance wireless a um preço acessível.",
                imageUrls: [
                    "https://utfs.io/f/3e2a7283-683f-43b5-a2c0-c64b5890a084-6pfvtn.png",
                    "https://utfs.io/f/05c62fd7-1aa9-46c0-9f81-29a92e330309-t3609o.png",
                    "https://utfs.io/f/b38e5709-6583-4c48-8f24-5762b18e76d7-jk7x9f.png",
                    "https://utfs.io/f/409af6e8-8c08-4afd-9615-a79c7f5f69cd-2ti76m.png",
                ],
                basePrice: 300,
                categoryId: mousesCategory.id,
                discountPercent: 15,
            },
            {
                name: "Hyperx Pulsefire Dart",
                slug: "hyperx-pulsefire-dart",
                description:
                    "O HyperX Pulsefire Dart é um mouse gamer sem fio com sensor Pixart 3389 de até 16.000 DPI e switches Omron com vida útil de 50 milhões de cliques. Possui carregamento sem fio compatível com Qi, bateria com até 50 horas de uso e conexão wireless de 2.4GHz com latência ultrabaixa. Design ergonômico para destros com punhos laterais emborrachados, 6 botões programáveis e iluminação RGB com duas zonas personalizáveis via software HyperX NGENUITY.",
                imageUrls: [
                    "https://utfs.io/f/c5200bd8-10b5-49bd-be72-deca34b2335a-1xd5uq.png",
                    "https://utfs.io/f/78bbbd0e-70ff-4970-b733-c34ef56abde0-2xbhct.png",
                    "https://utfs.io/f/9d12ba27-9dd0-48e9-84c1-a6297eeab4ff-7s04kc.png",
                    "https://utfs.io/f/322954c1-5ced-4296-8e87-a6ea266904ae-cmorrv.png",
                ],
                basePrice: 600,
                categoryId: mousesCategory.id,
                discountPercent: 10,
            },
            {
                name: "Razer Deathadder V2 Pro",
                slug: "razer-deathadder-v2-pro",
                description:
                    "O Razer DeathAdder V2 Pro é um mouse gamer sem fio com o renomado formato ergonômico DeathAdder, agora com tecnologia HyperSpeed Wireless e Bluetooth. Equipado com sensor óptico Focus+ de 20.000 DPI, switches ópticos Razer com acionamento de 0.2ms e bateria com até 120 horas de duração. Pesa apenas 88 gramas e conta com pés 100% PTFE para deslizamento suave. Armazenamento integrado de até 5 perfis e iluminação Razer Chroma RGB.",
                imageUrls: [
                    "https://utfs.io/f/182f9c0c-ba17-4b30-bf29-e086817ead3f-5jk68j.png",
                    "https://utfs.io/f/7b3840df-3dac-4237-a244-d5d5d9c18594-m16w6s.png",
                    "https://utfs.io/f/e6746f09-4afa-45e5-b7f0-fc9a0eae3e79-wiafu3.png",
                    "https://utfs.io/f/4276b0c3-6ee7-47bc-8c51-04259992f4a4-g0npvu.png",
                ],
                basePrice: 350,
                categoryId: mousesCategory.id,
                discountPercent: 0,
            },
        ];

        await prisma.product.createMany({
            data: mouses,
        });

        const keyboardsCategory = await prisma.category.create({
            data: {
                name: "Teclados",
                slug: "keyboards",
                imageUrl:
                    "https://utfs.io/f/f9f5bf3e-ebdd-49ea-b983-92f930f9afab-7zu99x.png",
            },
        });

        const keyboards = [
            {
                name: "Logitech MX Keys Mini",
                slug: "logitech-mx-keys-mini",
                description:
                    "O Logitech MX Keys Mini é um teclado sem fio compacto e minimalista, ideal para produtividade em espaços reduzidos. Possui teclas com formato esférico PerfectStroke para digitação confortável e precisa, retroiluminação inteligente que se adapta às condições de luz e desliga quando você se afasta. Conecta via Bluetooth Low Energy a até 3 dispositivos com troca Easy-Switch. Bateria recarregável USB-C com até 10 dias de uso (ou 5 meses sem retroiluminação). Compatível com Windows, macOS, iOS, Android e ChromeOS.",
                imageUrls: [
                    "https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png",
                    "https://utfs.io/f/10b3a1b3-f3f2-4fba-a009-af9e2ccc4ed7-ausijr.png",
                    "https://utfs.io/f/030c927c-3341-48b0-839d-65fa2fcb2be9-otkh7q.png",
                    "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
                ],
                basePrice: 650,
                categoryId: keyboardsCategory.id,
                discountPercent: 10,
            },
            {
                name: "Logitech MX Keys S",
                slug: "logitech-mx-keys-s",
                description:
                    "O Logitech MX Keys S é um teclado sem fio full-size projetado para produtividade máxima. Conta com teclas PerfectStroke com formato côncavo para digitação fluida, retroiluminação inteligente com sensor de proximidade e Smart Actions para automatizar tarefas repetitivas. Conecta-se via Bluetooth ou receptor Logi Bolt a até 3 dispositivos. Bateria recarregável USB-C com autonomia de até 10 dias com luz ou 5 meses sem. Layout completo com teclado numérico integrado.",
                imageUrls: [
                    "https://utfs.io/f/834b0e30-45bc-47dd-b2c1-bfe65ef62eb2-m9yl8y.png",
                    "https://utfs.io/f/e651e1be-734a-4847-976e-b54979290830-du02k1.png",
                    "https://utfs.io/f/2c3788e1-8a8c-4672-af73-d2d3d5878d16-5e1jv4.png",
                    "https://utfs.io/f/90822af7-89cf-4f82-9f8d-cede02239072-31wytt.png",
                ],
                basePrice: 750,
                categoryId: keyboardsCategory.id,
                discountPercent: 10,
            },
            {
                name: "Logitech Pop Keys",
                slug: "logitech-pop-keys",
                description:
                    "O Logitech POP Keys é um teclado mecânico sem fio com design divertido e teclas de emoji customizáveis. Utiliza switches mecânicos táteis com feedback satisfatório, teclas arredondadas estilo máquina de escrever e cores vibrantes. Conecta via Bluetooth a até 3 dispositivos com Easy-Switch. Possui 8 teclas de emoji intercambiáveis e personalizáveis via software Logi Options+. Compacto (sem teclado numérico) e alimentado por 2 pilhas AAA com duração de até 3 anos.",
                imageUrls: [
                    "https://utfs.io/f/9e89c3ab-334b-4e4f-bc9a-6aa2baeeb9c3-u67teu.png",
                    "https://utfs.io/f/46081918-deac-4a8b-a082-caba99ff7b57-58nqzp.png",
                    "https://utfs.io/f/ce638b00-b423-476c-a631-2a5977aa9816-jowbfg.png",
                    "https://utfs.io/f/f7af860a-64d3-4221-acde-51ad510b898b-qeno4j.png",
                ],
                basePrice: 440,
                categoryId: keyboardsCategory.id,
                discountPercent: 5,
            },
            {
                name: "Logitech MX Mechanical",
                slug: "logitech-mx-mechanical",
                description:
                    "O Logitech MX Mechanical é um teclado mecânico sem fio full-size que combina produtividade e sensação tátil premium. Disponível com switches mecânicos táteis, lineares ou clicky de baixo perfil. Possui retroiluminação inteligente com sensor de proximidade, conexão via Bluetooth ou Logi Bolt para até 3 dispositivos, e bateria recarregável USB-C com até 15 dias de uso. Teclas com formato esférico para precisão e conforto, compatível com macOS e Windows com teclas de função dedicadas.",
                imageUrls: [
                    "https://utfs.io/f/1c84b35c-a523-4ec5-afab-07717bfb3bc0-tbfuuf.png",
                    "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
                    "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
                    "https://utfs.io/f/2646c695-127e-43c7-b9e6-8785ae04d775-918ah0.png",
                ],
                basePrice: 700,
                categoryId: keyboardsCategory.id,
                discountPercent: 15,
            },
            {
                name: "Epomaker TH80",
                slug: "epomaker-th80",
                description:
                    "O Epomaker TH80 é um teclado mecânico sem fio compacto no layout 75%, com knob rotativo para controle de volume e mídia. Possui conectividade tripla: Bluetooth 5.0, wireless 2.4GHz e USB-C com fio. Suporta hot-swap para troca fácil de switches sem solda, iluminação RGB por tecla com múltiplos efeitos e bateria de 3000mAh com até 200 horas de uso. Estrutura em plástico de alta qualidade com placa de montagem em aço, espuma de silenciamento e teclas PBT doubleshot.",
                imageUrls: [
                    "https://utfs.io/f/a9a8150a-0fd8-4fa8-a30f-f11aaf90e07d-t8tglh.png",
                    "https://utfs.io/f/cb2f3dac-63b3-4bad-baf5-316094d3f10c-4b9e6c.png",
                    "https://utfs.io/f/697f9e83-d983-4e17-b75c-057f16b57b6c-kmao8t.png",
                    "https://utfs.io/f/cba48ecb-4f08-48c6-9a18-574cd3cd9271-ph9bb6.png",
                ],
                basePrice: 500,
                categoryId: keyboardsCategory.id,
                discountPercent: 5,
            },
            {
                name: "Redragon Gamer Ashe",
                slug: "redragon-gamer-ashe",
                description:
                    "O Redragon Gamer Ashe é um teclado mecânico gamer com switches mecânicos Blue (clicky) ou Red (linear), iluminação RGB com efeitos personalizáveis e construção robusta com base em metal. Possui layout compacto TKL (sem teclado numérico), teclas com anti-ghosting e N-Key Rollover completo para registro preciso de múltiplas teclas simultâneas. Conexão USB com cabo trançado removível, keycaps em ABS doubleshot e software para personalização de macros e iluminação.",
                imageUrls: [
                    "https://utfs.io/f/51bbaaa2-b3d8-49e8-b2e3-46f833218186-b14pyz.png",
                    "https://utfs.io/f/82a02e42-e7fe-437b-b534-d86404bdb006-7jaqka.png",
                    "https://utfs.io/f/57225d52-9e6a-4144-8337-c5dd20cbdca6-41gr5l.png",
                    "https://utfs.io/f/0f8ebb24-7818-4243-95b6-c7948688c074-jmrqw.png",
                ],
                basePrice: 400,
                categoryId: keyboardsCategory.id,
                discountPercent: 25,
            },
        ];

        await prisma.product.createMany({
            data: keyboards,
        });

        const headphonesCategory = await prisma.category.create({
            data: {
                name: "Fones",
                slug: "headphones",
                imageUrl:
                    "https://utfs.io/f/42bb73b3-4a24-4542-aee4-12fa68014dc3-e7tkon.png",
            },
        });

        const headphones = [
            {
                name: "Logitech Zone Vibe 100",
                slug: "logitech-zone-vibe-100",
                description:
                    "O Logitech Zone Vibe 100 é um headset sem fio leve e confortável, projetado para trabalho híbrido e uso pessoal. Pesa apenas 185g com almofadas macias over-ear e headband acolchoado para uso prolongado. Conexão Bluetooth com alcance de até 30 metros, microfone flip-to-mute com cancelamento de ruído e drivers de 40mm para áudio nítido. Bateria com até 20 horas de uso, controles intuitivos no fone e certificação para Microsoft Teams e Zoom.",
                imageUrls: [
                    "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
                    "https://utfs.io/f/c925ee13-366e-4623-8395-1e85592a5ffc-guymjj.png",
                    "https://utfs.io/f/59c43701-1214-48c9-8a6b-7c7c60aa93de-ogaiw2.png",
                    "https://utfs.io/f/5191ae2c-283b-4562-9165-45bcfe12f88a-59kdnh.png",
                ],
                basePrice: 750,
                categoryId: headphonesCategory.id,
                discountPercent: 10,
            },
            {
                name: "Logitech Pro X 2 Lightspeed",
                slug: "logitech-pro-x-2-lightspeed",
                description:
                    "O Logitech Pro X 2 Lightspeed é um headset gamer profissional com tecnologia sem fio LIGHTSPEED de baixa latência, som surround DTS Headphone:X 2.0, e drivers de grafeno de 50mm para áudio de alta fidelidade. Possui microfone com tecnologia Blue VO!CE para captação vocal cristalina com filtragem em tempo real. Construção leve (320g) com almofadas de espuma viscoelástica e couro sintético, bateria de 50 horas e compatibilidade com PC, PlayStation, Nintendo Switch e dispositivos móveis.",
                imageUrls: [
                    "https://utfs.io/f/f86c9598-6782-4f91-8161-c3d9d746147a-cnu60s.png",
                    "https://utfs.io/f/e2d2840f-de45-45a5-89ba-724d4cb416f6-x8xsfx.png",
                    "https://utfs.io/f/13ce6f4b-bbdd-459e-a77d-f8b1cf9248c4-h72n42.png",
                    "https://utfs.io/f/c6b472fb-2f40-4794-a2c3-acb159a3acc3-3e0zb3.png",
                ],
                basePrice: 1200,
                categoryId: headphonesCategory.id,
                discountPercent: 5,
            },
            {
                name: "Logitech Astro A30",
                slug: "logitech-astro-a30",
                description:
                    "O Logitech Astro A30 é um headset gamer premium com conectividade versátil: wireless LIGHTSPEED, Bluetooth e conexão de 3.5mm, permitindo uso simultâneo em múltiplas plataformas. Equipado com drivers de 40mm com ímãs de neodímio para som imersivo, microfone removível com isolamento de voz e design ultraleve. Bateria com até 27 horas de duração, painéis laterais intercambiáveis para personalização visual e compatibilidade com Xbox, PlayStation, PC e dispositivos móveis.",
                imageUrls: [
                    "https://utfs.io/f/4242f20f-a15e-498f-9039-44f183847e0d-3us24m.png",
                    "https://utfs.io/f/82c74203-cf79-466e-9510-8ff5efe5d197-4l6gkb.png",
                    "https://utfs.io/f/c93832d7-adcd-419c-8030-591a444a3e3d-d14z98.png",
                    "https://utfs.io/f/cc70de0f-a415-4876-8777-54c195a315f9-lh3hy5.png",
                ],
                basePrice: 1500,
                categoryId: headphonesCategory.id,
                discountPercent: 15,
            },
            {
                name: "Logitech Zone Wired Earbuds",
                slug: "logitech-zone-wired-earbuds",
                description:
                    "O Logitech Zone Wired Earbuds é um fone de ouvido intra-auricular com fio projetado para videoconferências e trabalho remoto. Possui cancelamento de ruído ativo (ANC) com modo de transparência, microfone integrado com cancelamento de ruído avançado e drivers de 12mm para áudio detalhado. Conexão USB-C com DAC embutido de alta resolução, controles inline para volume e mute, e pontas de silicone em múltiplos tamanhos para vedação perfeita. Certificado para Microsoft Teams, Zoom e Google Meet.",
                imageUrls: [
                    "https://utfs.io/f/7b44e130-1bb2-4838-85ac-e8d78a402559-l6h1vy.png",
                    "https://utfs.io/f/8e30cca7-1c73-4408-93b0-47f848036c75-cth6ct.png",
                    "https://utfs.io/f/add1fe25-4246-49b6-bc38-bb361d81435f-4ghato.png",
                    "https://utfs.io/f/be26c88e-abc5-4579-b04e-31d9102f44a2-3wikph.png",
                ],
                basePrice: 550,
                categoryId: headphonesCategory.id,
                discountPercent: 5,
            },
            {
                name: "Hyperx Cloud Stinger 2",
                slug: "hyperx-cloud-stinger-2",
                description:
                    "O HyperX Cloud Stinger 2 é um headset gamer leve e confortável, pesando apenas 275g, ideal para longas sessões de jogo. Possui drivers de 50mm com câmaras de som DTS Headphone:X para áudio espacial imersivo, microfone giratório com cancelamento de ruído e função mute ao levantar. Almofadas de espuma viscoelástica com revestimento em couro sintético respirável, headband em aço flexível com ajuste rotacional de 90° e conexão de 3.5mm compatível com PC, PS4, PS5, Xbox e Nintendo Switch.",
                imageUrls: [
                    "https://utfs.io/f/0b8199d2-2cd8-4927-86e3-d10ffc364403-oxvmyz.png",
                    "https://utfs.io/f/0c95dce8-39d5-46cf-9132-f4a5c5466db7-ghx4a2.png",
                    "https://utfs.io/f/1fffc6b5-66e7-4e1e-bfb3-d7e138d60dd6-81yll5.png",
                    "https://utfs.io/f/2bec72be-a9cb-4627-b90a-7c8a55107152-dzx3s.png",
                ],
                basePrice: 250,
                categoryId: headphonesCategory.id,
                discountPercent: 0,
            },
            {
                name: "Razer Kraken X",
                slug: "razer-kraken-x",
                description:
                    "O Razer Kraken X é um headset gamer ultraleve com apenas 250g, projetado para conforto em longas maratonas de jogos. Conta com drivers customizados de 40mm com som surround 7.1 virtual para posicionamento de áudio preciso em jogos. Microfone cardioide flexível com isolamento de ruído para comunicação clara, headband acolchoado com almofadas de tecido macio e isolamento de ruído passivo. Conexão via cabo de 3.5mm com compatibilidade multiplataforma para PC, Mac, PS4, Xbox One e Switch.",
                imageUrls: [
                    "https://utfs.io/f/6c91e18d-4148-4495-955b-46281aaaaed0-pbckc3.png",
                    "https://utfs.io/f/7ee6e7f5-9fe7-4226-9116-4eab3da7c5c6-xocfv8.png",
                    "https://utfs.io/f/b7593a80-238b-4d59-b996-5186dac3aa88-szrqkr.png",
                    "https://utfs.io/f/89677788-43d8-48ed-ba32-b10ed8d93415-kmrv1m.png",
                ],
                basePrice: 200,
                categoryId: headphonesCategory.id,
                discountPercent: 0,
            },
        ];

        await prisma.product.createMany({
            data: headphones,
        });

        const mousepadsCategory = await prisma.category.create({
            data: {
                name: "Mousepads",
                slug: "mousepads",
                imageUrl:
                    "https://utfs.io/f/5f889f93-7446-4da7-bc6b-4926c85997f9-e7tkom.png",
            },
        });

        const mousepads = [
            {
                name: "Logitech Powerplay",
                slug: "logitech-powerplay",
                description:
                    "O Logitech Powerplay é um sistema de mousepad com carregamento sem fio contínuo para mouses compatíveis da linha Logitech G, como o G Pro X Superlight e G502 X. Utiliza a tecnologia LIGHTSPEED para carregar o mouse durante o uso, eliminando a necessidade de cabos ou pausas para recarga. Inclui duas superfícies intercambiáveis: tecido macio para controle e superfície rígida para velocidade. Dimensões de 321x344mm com base fina e elegante que integra perfeitamente ao setup.",
                imageUrls: [
                    "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
                    "https://utfs.io/f/6a1b20e2-00bf-4805-acff-e51977ea131c-x3442a.png",
                    "https://utfs.io/f/0dfc4a23-6ca9-43e2-b240-d7d7d937f544-ti1f7x.png",
                    "https://utfs.io/f/041bfa51-af8d-4af8-9ec6-ca3536786ad3-l22wj0.png",
                ],
                basePrice: 950,
                categoryId: mousepadsCategory.id,
                discountPercent: 10,
            },
            {
                name: "Logitech Desk Mat",
                slug: "logitech-desk-mat",
                description:
                    "O Logitech Desk Mat é um tapete de mesa estendido que protege sua mesa enquanto oferece uma superfície ampla e uniforme para mouse e teclado. Com dimensões generosas de 700x300mm, possui superfície de tecido macio resistente a respingos com bordas costuradas anti-desgaste. Base de borracha antiderrapante mantém o mat fixo durante o uso. Design minimalista disponível em múltiplas cores, ideal para quem busca organização e estética no setup de trabalho ou gaming.",
                imageUrls: [
                    "https://utfs.io/f/3b387596-f854-438d-85e1-faab21e83d36-n9raei.png",
                    "https://utfs.io/f/65e9ebe8-09a7-4c61-9797-08633719c1dc-1nss0n.png",
                    "https://utfs.io/f/18b56460-98b2-4676-adf3-2e772b685f6e-qlcufs.png",
                    "https://utfs.io/f/aad65548-3410-4844-8474-ba5c94643d53-ji7547.png",
                ],
                basePrice: 150,
                categoryId: mousepadsCategory.id,
                discountPercent: 0,
            },
            {
                name: "Logitech G740",
                slug: "logitech-g740",
                description:
                    "O Logitech G740 é um mousepad gamer de tecido grosso (5mm) otimizado para sensores de alta precisão. Sua superfície de tecido de malha fina oferece a quantidade ideal de fricção para movimentos rápidos e paradas precisas, ideal para jogos FPS. Com dimensões de 460x400mm, oferece amplo espaço para movimentos de baixa sensibilidade. Base de borracha natural garante estabilidade total e as bordas são tratadas para durabilidade. Textura consistente que mantém o desempenho do sensor em toda a área.",
                imageUrls: [
                    "https://utfs.io/f/dd74b5ce-8fc4-4a59-8924-35039db43a09-culmza.png",
                    "https://utfs.io/f/5f6d9368-d639-4bca-b12c-85251d15f529-gv99k9.png",
                    "https://utfs.io/f/34529fd8-1ac4-4911-b6fb-054626051825-ofzvvc.png",
                    "https://utfs.io/f/588de6a4-d739-4502-a494-0f4f47ca3fbd-59v0o7.png",
                ],
                basePrice: 200,
                categoryId: mousepadsCategory.id,
                discountPercent: 5,
            },
            {
                name: "Logitech Mousepad Studio Series",
                slug: "logitech-mousepad-studio-series",
                description:
                    "O Logitech Mousepad Studio Series é um mousepad premium com design elegante e moderno para ambientes de trabalho. Superfície de tecido antiderrapante com tratamento anti-respingos que facilita a limpeza. Base de borracha que mantém o pad firmemente no lugar, bordas planas sem elevação para conforto do pulso e dimensões compactas ideais para mesas organizadas. Disponível em cores neutras e sofisticadas que combinam com qualquer decoração de escritório. Espessura fina para um perfil discreto.",
                imageUrls: [
                    "https://utfs.io/f/36f714be-bd91-4786-a883-1ca459df92ea-k45quc.png",
                    "https://utfs.io/f/62df3fba-54f0-4b73-a6e3-8ce80febcf72-dcr81v.png",
                    "https://utfs.io/f/a095e6e3-e08c-42a4-a07a-0d3719d1a3d7-6lcp9e.png",
                    "https://utfs.io/f/1ff38054-13eb-408d-81e9-4bb64e467e03-61tj3.png",
                ],
                basePrice: 250,
                categoryId: mousepadsCategory.id,
                discountPercent: 15,
            },
            {
                name: "Force One Skyhawk Dark",
                slug: "force-one-skyhawk-dark",
                description:
                    "O Force One Skyhawk Dark é um mousepad gamer extended na cor preta com superfície de tecido speed otimizada para movimentos rápidos e precisos. Com dimensões de 900x400mm, cobre toda a área de teclado e mouse. Possui bordas costuradas reforçadas para maior durabilidade, base emborrachada antiderrapante de 4mm de espessura e superfície impermeável resistente a líquidos. Ideal para jogadores de FPS e MMO que precisam de amplo espaço para movimentação com baixa sensibilidade.",
                imageUrls: [
                    "https://utfs.io/f/72221936-9db3-4f7b-989e-68f47742b8da-x7k2s6.png",
                    "https://utfs.io/f/fa414332-d06e-4294-8cdb-0f4545d4649d-zcern9.png",
                    "https://utfs.io/f/ca56bb07-bfb9-481a-af57-3814b8e6e432-xjulgs.png",
                    "https://utfs.io/f/a2ea409c-5bea-45e9-b35e-e529ec7a8fa2-vezwlp.png",
                ],
                basePrice: 300,
                categoryId: mousepadsCategory.id,
                discountPercent: 10,
            },
            {
                name: "Force One Skyhawk Snow",
                slug: "force-one-skyhawk-snow",
                description:
                    "O Force One Skyhawk Snow é a versão branca do mousepad gamer extended Skyhawk, com superfície de tecido speed de alta performance para deslizamento suave e preciso. Dimensões de 900x400mm com 4mm de espessura, bordas costuradas resistentes a desgaste e base emborrachada antiderrapante. Superfície impermeável para proteção contra respingos e fácil limpeza. O design branco clean combina com setups de cor clara e oferece excelente rastreamento para sensores ópticos e laser.",
                imageUrls: [
                    "https://utfs.io/f/c076401e-8850-48bd-86f1-ed183473f03b-x7tx5v.png",
                    "https://utfs.io/f/c4291b68-6aea-44b1-b813-d6000d07c445-zcom0y.png",
                    "https://utfs.io/f/ffae5803-44bd-4a61-ba7e-6d2bca6749f0-xjkr33.png",
                    "https://utfs.io/f/b842e2d0-cc20-4c8e-851e-4493670841a5-veq280.png",
                ],
                basePrice: 300,
                categoryId: mousepadsCategory.id,
                discountPercent: 5,
            },
        ];

        await prisma.product.createMany({
            data: mousepads,
        });

        const monitorsCategory = await prisma.category.create({
            data: {
                name: "Monitores",
                slug: "monitors",
                imageUrl:
                    "https://utfs.io/f/7cbf0652-7cdc-468f-9d83-f80a9b0c2c73-11uae7.png",
            },
        });

        const monitors = [
            {
                name: "Dell S2421HN",
                slug: "dell-s2421hn",
                description:
                    "O Dell S2421HN é um monitor de 24 polegadas Full HD (1920x1080) com painel IPS para cores vibrantes e ângulos de visão amplos de 178°. Taxa de atualização de 75Hz com AMD FreeSync para gameplay suave sem tearing. Design de bordas ultrafinas em 3 lados (InfinityEdge) para experiência imersiva em configurações multi-monitor. Conectividade com 2x HDMI 1.4, suporte ajustável em inclinação e tecnologia ComfortView para redução de luz azul. Tempo de resposta de 4ms (GtG).",
                imageUrls: [
                    "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
                    "https://utfs.io/f/d97cf538-043d-4cb1-814d-3d79d76ff7e2-te7tat.png",
                    "https://utfs.io/f/f6172b7c-f0b3-4f52-8d62-8cc1656bc114-x9wd56.png",
                    "https://utfs.io/f/b080961c-872e-4fb1-aaae-6b363493ead3-owwhm1.png",
                ],
                basePrice: 1500,
                categoryId: monitorsCategory.id,
                discountPercent: 15,
            },
            {
                name: "Dell P2422H",
                slug: "dell-p2422h",
                description:
                    "O Dell P2422H é um monitor profissional de 24 polegadas Full HD (1920x1080) com painel IPS e cobertura de 99% sRGB para precisão de cores em trabalhos criativos. Suporte totalmente ajustável em altura, rotação, inclinação e pivot (retrato/paisagem). Conectividade completa com DisplayPort 1.2, HDMI 1.4, VGA e 4 portas USB 3.2. Certificação TÜV para redução de luz azul e livre de cintilação (flicker-free). Design compacto com bordas ultrafinas e gerenciamento de cabos integrado.",
                imageUrls: [
                    "https://utfs.io/f/b61bd487-0e18-4f87-9153-fb8c09faab66-rax9q4.png",
                    "https://utfs.io/f/2a01b145-b299-48ae-923f-d784e1471ff6-w5lwxn.png",
                    "https://utfs.io/f/e3d6f6a4-7d88-482f-b74c-9eb1f0902571-y0thty.png",
                    "https://utfs.io/f/2667bb2f-f8ec-4126-bc22-9892f0f599ef-t64umf.png",
                ],
                basePrice: 2000,
                categoryId: monitorsCategory.id,
                discountPercent: 5,
            },
            {
                name: "Dell P2723QE",
                slug: "dell-p2723qe",
                description:
                    "O Dell P2723QE é um monitor profissional de 27 polegadas com resolução 4K UHD (3840x2160) e painel IPS com 99% sRGB. Destaque para a conectividade USB-C com fornecimento de até 90W de energia, permitindo carregar notebooks enquanto exibe a imagem com um único cabo. Hub USB integrado com portas USB-A e USB-C downstream, além de DisplayPort 1.2, HDMI e RJ45 Ethernet. Suporte ergonômico completo com ajuste de altura, inclinação, giro e pivot.",
                imageUrls: [
                    "https://utfs.io/f/dde7ea20-ad12-45bb-9310-008dc46897d4-60cp0c.png",
                    "https://utfs.io/f/ae7beb12-ac74-4294-9aa6-66fc702d97ab-2cn6it.png",
                    "https://utfs.io/f/0d6c9922-bdec-4369-bbf8-9f9a6368bd97-apn21y.png",
                    "https://utfs.io/f/14d925f4-b203-4063-adc1-be14f2d029c1-j2mxl3.png",
                ],
                basePrice: 2500,
                categoryId: monitorsCategory.id,
                discountPercent: 0,
            },
            {
                name: "Dell S3422DWG",
                slug: "dell-s3422dwg",
                description:
                    "O Dell S3422DWG é um monitor gamer curvo de 34 polegadas ultrawide WQHD (3440x1440) com painel VA e curvatura 1800R para imersão total. Taxa de atualização de 144Hz com AMD FreeSync Premium e tempo de resposta de 2ms (MPRT) para jogabilidade fluida. HDR 400 com cobertura de 90% DCI-P3 para cores cinematográficas. Conectividade com 2x HDMI 2.0, DisplayPort 1.4 e 5x USB. Alto-falantes integrados de 5W, suporte ajustável e iluminação ambiente na parte traseira.",
                imageUrls: [
                    "https://utfs.io/f/c36e0bab-e635-4213-8f93-c48761871e80-1wl9gu.png",
                    "https://utfs.io/f/42454c14-ccec-4e7f-a8e6-cf5f67d73e26-qu5bvz.png",
                    "https://utfs.io/f/a1b5e99b-72fd-4472-887e-c563fee2e469-j9eno0.png",
                    "https://utfs.io/f/68f08f60-df7f-48a0-929c-27356559782f-5o5er5.png",
                ],
                basePrice: 3200,
                categoryId: monitorsCategory.id,
                discountPercent: 0,
            },
            {
                name: "Dell S3222DGM",
                slug: "dell-s3222dgm",
                description:
                    "O Dell S3222DGM é um monitor gamer curvo de 32 polegadas QHD (2560x1440) com painel VA e curvatura 1000R para máxima imersão. Taxa de atualização de 165Hz com AMD FreeSync Premium e tempo de resposta de 2ms para ação sem borrões. Contraste de 3000:1 nativo para pretos profundos e detalhes em cenas escuras. Cobertura de 99% sRGB, conectividade com 2x HDMI 2.0 e DisplayPort 1.2, e design com bordas ultrafinas em 3 lados. Suporte com ajuste de altura e inclinação.",
                imageUrls: [
                    "https://utfs.io/f/dee01030-d114-4a76-8d85-8ad6d11d5304-yi0au.png",
                    "https://utfs.io/f/2c9c9a7a-f81c-4eb7-882e-80e45cd69044-pw22pz.png",
                    "https://utfs.io/f/87cd76a7-b385-4b68-a654-d1199ee61c5e-k7hwu0.png",
                    "https://utfs.io/f/b0d742e2-28ed-49bc-977f-b20b2de9a0bd-4q25l5.png",
                ],
                basePrice: 3500,
                categoryId: monitorsCategory.id,
                discountPercent: 0,
            },
            {
                name: "Dell AW2524HF",
                slug: "dell-aw2524hf",
                description:
                    "O Dell Alienware AW2524HF é um monitor gamer de 25 polegadas Full HD (1920x1080) com painel IPS de 500Hz, um dos mais rápidos do mundo, projetado para eSports competitivo. Tempo de resposta de 0.5ms (GtG) com AMD FreeSync Premium e compatibilidade G-Sync. Cobertura de 99% sRGB com Delta E<2, iluminação AlienFX RGB personalizável na parte traseira, suporte totalmente ajustável e design Alienware Legend 3.0. Ideal para jogadores profissionais que exigem a máxima taxa de quadros.",
                imageUrls: [
                    "https://utfs.io/f/faaed1da-1d16-4839-8373-7eb813e46dc8-al6r5z.png",
                    "https://utfs.io/f/8de1bedc-06a0-47a2-9441-f49a217612ff-zid8e0.png",
                    "https://utfs.io/f/15e1f730-ed3a-4bbf-93cb-2cd9992ecfcd-akt5yv.png",
                    "https://utfs.io/f/d631cbaf-471e-40cc-be9e-7dd62a1c88bc-ecqwga.png",
                ],
                basePrice: 4200,
                categoryId: monitorsCategory.id,
                discountPercent: 10,
            },
        ];

        await prisma.product.createMany({
            data: monitors,
        });

        const speakersCategory = await prisma.category.create({
            data: {
                name: "Speakers",
                slug: "speakers",
                imageUrl:
                    "https://utfs.io/f/b73c526a-9e78-444e-8822-7cda6e857b9f-e7tkoj.png",
            },
        });

        const speakers = [
            {
                name: "Logitech Surround Sound Z607",
                slug: "logitech-surround-sound-z607",
                description:
                    "O Logitech Z607 é um sistema de som surround 5.1 com 160W de potência de pico para áudio envolvente em filmes, músicas e jogos. Inclui 5 caixas satélite e subwoofer dedicado para graves profundos. Conectividade versátil com Bluetooth, entrada de 3.5mm, RCA e USB para múltiplas fontes de áudio. Controle remoto sem fio para ajuste de volume, graves e seleção de entrada à distância. Configuração simplificada com cabos codificados por cores e display no painel do subwoofer.",
                imageUrls: [
                    "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
                    "https://utfs.io/f/b49c22f5-4df5-4997-a4ff-09fb5486010b-4e4pk7.png",
                    "https://utfs.io/f/2faf574c-edc9-4814-b539-e031c20eb5b5-2d9t8a.png",
                    "https://utfs.io/f/943d92d3-8bfb-4963-8ec6-7841ac29ed96-94oc0r.png",
                ],
                basePrice: 1200,
                categoryId: speakersCategory.id,
                discountPercent: 5,
            },
            {
                name: "Logitech Dock",
                slug: "logitech-dock",
                description:
                    "O Logitech Dock é uma estação de trabalho all-in-one que combina speakerphone de alta qualidade com hub USB-C para simplificar seu setup. Possui alto-falante com cancelamento de ruído e microfones beamforming para chamadas cristalinas, além de hub com 5 portas USB, HDMI, DisplayPort e carregamento de 100W via USB-C. Integração com calendário para notificações visuais de reuniões via luz LED e gerenciamento via Logi Tune. Design elegante que organiza cabos e centraliza conectividade.",
                imageUrls: [
                    "https://utfs.io/f/fff82151-82d7-4618-9d0d-1fc96b5f8efb-cukwpp.png",
                    "https://utfs.io/f/2f52ea57-35f9-43f0-92e7-09fc97c008e2-gv9ztu.png",
                    "https://utfs.io/f/f03d7f00-5595-4fe2-b336-f9952d96fe24-ofz5lr.png",
                    "https://utfs.io/f/22d1ff6e-9689-439a-a8b5-a9477f80169a-59vqxs.png",
                ],
                basePrice: 4500,
                categoryId: speakersCategory.id,
                discountPercent: 15,
            },
            {
                name: "Sony SA-Z9R Speakers",
                slug: "sony-sa-z9r-speakers",
                description:
                    "O Sony SA-Z9R é um par de caixas de som surround traseiras projetadas para complementar soundbars Sony compatíveis, criando uma experiência de home theater envolvente. Conectam-se sem fio ao receiver/soundbar para áudio surround 5.1 real sem necessidade de cabos longos pela sala. Cada caixa possui driver full-range com potência dedicada, design compacto e discreto que se integra à decoração, e configuração automática via wireless. Perfeitas para criar imersão em filmes e games.",
                imageUrls: [
                    "https://utfs.io/f/a4d4d15c-da43-4f54-a3b9-9487c11ed4b5-o2pxdo.png",
                    "https://utfs.io/f/431b923f-b23c-4022-9881-f965407ab41b-j81a65.png",
                    "https://utfs.io/f/ffb002da-22f2-49c4-a4a1-8c7e57bc329a-edcmym.png",
                    "https://utfs.io/f/00370513-6b55-443b-b45a-fa8f95f6e29f-9inzr3.png",
                ],
                basePrice: 4000,
                categoryId: speakersCategory.id,
                discountPercent: 10,
            },
            {
                name: "Sony XB43 Extra Bass",
                slug: "sony-xb43-extra-bass",
                description:
                    "O Sony SRS-XB43 Extra Bass é uma caixa de som Bluetooth portátil com graves potentes impulsionados pela tecnologia X-Balanced Speaker Unit. Possui classificação IP67 para resistência à água, poeira e ferrugem, sendo ideal para uso externo. Bateria com até 24 horas de duração, iluminação LED multicolorida que pulsa com a música e função Party Connect para emparelhar mais de 100 caixas. NFC para pareamento rápido, entrada auxiliar de 3.5mm e porta USB-A para carregar dispositivos.",
                imageUrls: [
                    "https://utfs.io/f/78383361-cc0b-4356-bbf3-043f21d5171d-gxgbj0.png",
                    "https://utfs.io/f/c4ab1d24-97a6-48a6-9bfb-74b6215711be-5g9sx1.png",
                    "https://utfs.io/f/204b5c37-8023-4633-99be-a95b24c34db7-rtzxd2.png",
                    "https://utfs.io/f/b5372e93-9dff-4cd5-a112-ab9d258b2856-kte061.png",
                ],
                basePrice: 3200,
                categoryId: speakersCategory.id,
                discountPercent: 0,
            },
            {
                name: "Sony XB23 Extra Bass",
                slug: "sony-xb23-extra-bass",
                description:
                    "O Sony SRS-XB23 Extra Bass é uma caixa de som Bluetooth portátil compacta com formato cilíndrico e graves intensos via processador X-Balanced Speaker Unit. Resistência IP67 contra água e poeira, bateria com até 12 horas de reprodução e tecnologia Bluetooth 5.0 com codec LDAC para áudio de alta resolução. Microfone integrado para chamadas, função Party Connect para conectar múltiplas caixas e design leve (580g) com alça integrada para transporte fácil. Disponível em várias cores.",
                imageUrls: [
                    "https://utfs.io/f/2576317e-a26b-4586-b7ad-7477031684be-f1tve5.png",
                    "https://utfs.io/f/5332ae8f-aec7-4768-9b44-7e0d8b2118a9-q9fa1g.png",
                    "https://utfs.io/f/008ea186-9d2e-4996-969e-5621d4d4016b-3gfmi3.png",
                    "https://utfs.io/f/8422af22-693c-44cb-992f-13e1f8b81cdd-x6aj1m.png",
                ],
                basePrice: 3500,
                categoryId: speakersCategory.id,
                discountPercent: 0,
            },
            {
                name: "Sony HT-S200F Soundbar",
                slug: "sony-ht-s200f-soundbar",
                description:
                    "A Sony HT-S200F é uma soundbar compacta 2.1 canais com subwoofer embutido que entrega graves surpreendentes sem necessidade de caixa de subwoofer separada. Potência total de 80W com tecnologia S-Force PRO Front Surround para efeito de áudio envolvente. Conectividade via HDMI ARC, Bluetooth, USB e entrada óptica digital. Compatível com Dolby Digital para áudio cinematográfico e modo de voz dedicado para diálogos claros. Design slim que combina com TVs de qualquer tamanho e montagem em parede inclusa.",
                imageUrls: [
                    "https://utfs.io/f/5e134cd7-e4ec-40aa-ac97-cf63d1eade52-uk14e7.png",
                    "https://utfs.io/f/3cc3ce89-2fa5-45bf-931c-818d97371287-wovt9a.png",
                    "https://utfs.io/f/a29db5cd-e7c3-44f2-938d-f90a21d993a7-ytqi4d.png",
                    "https://utfs.io/f/f3282c27-c987-4420-92cb-ce0673c154f3-y2iuzo.png",
                ],
                basePrice: 2500,
                categoryId: speakersCategory.id,
                discountPercent: 0,
            },
        ];

        await prisma.product.createMany({
            data: speakers,
        });

        console.log("Seed completed successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
