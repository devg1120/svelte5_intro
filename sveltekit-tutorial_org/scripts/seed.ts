import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.article.create({
		data: {
			title: '今日の散歩',
			content:
				'朝、気持ちの良い風が吹いていたので、近くの公園に散歩に行きました。色とりどりの花々が咲き誇り、小さな鳥たちが忙しく飛び交っていました。自然の中でリフレッシュできる時間は本当に素晴らしいです。'
		}
	});

	await prisma.article.create({
		data: {
			title: '今日のランチ',
			content:
				'昼食は、近くのカフェでサンドイッチとコーヒーをいただきました。サンドイッチはハムとチーズがたっぷり挟まれており、コーヒーは香り高くて美味しかったです。美味しい食事をいただくと、気持ちもリフレッシュされますね。'
		}
	});

	await prisma.article.create({
		data: {
			title: '夜は読書を楽しむ',
			content:
				'夜、家に帰ってからは、最近読み始めた小説を読み進めました。物語の展開が気になって、ついつい夜更かししてしまいました。読書は、日常の中で自分だけの時間を楽しむことができるので、とても大切な時間です。'
		}
	});
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
