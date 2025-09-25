const sections = [
    {
        title: '情報の正確性について',
        body: '本サイトに掲載する内容は、正確な情報を提供できるよう努めていますが、その正確性や完全性、最新性を保証するものではありません。利用者は自身の判断と責任において本サイトの情報をご活用ください。',
    },
    {
        title: '損害等の責任について',
        body: '本サイトの利用によって利用者が被った損害やトラブルについて、運営者は一切の責任を負いません。掲載内容の利用や、紹介するサービス・製品の利用は利用者ご自身の責任で行ってください。',
    },
    {
        title: '外部リンクについて',
        body: '本サイトには外部サイトへのリンクが含まれる場合があります。リンク先で提供される情報・サービス・製品等について、運営者は一切の責任を負いません。',
    },
    {
        title: '著作権について',
        body: '本サイトに掲載している文章・画像等の著作権は、特別な記載がない限り運営者に帰属します。無断転載、無断引用は禁止しています。引用を行う場合は、出典として本サイト名と該当ページのURLを明記してください。',
    },
    {
        title: 'コンテンツの変更・停止について',
        body: '本サイトの構成や掲載内容は、予告なく変更・削除される場合があります。また、運営者の判断により本サイトの運営を中断・停止することがあります。',
    },
    {
        title: '専門的な助言について',
        body: '本サイトに掲載する内容は、医療・法律・投資などの専門的な助言を提供するものではありません。必要に応じて、各分野の専門家にご相談ください。',
    },
];

export default function DisclaimerPage() {
    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-12">
            <section className="rounded-lg bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900">免責事項</h1>
                <p className="mt-4 text-sm text-slate-500">最終更新日: 2024年10月1日</p>
                <p className="mt-6 leading-relaxed text-slate-700">
                    本免責事項は、当サイトをご利用いただく際のルールと責任範囲を明確にするためのものです。ご利用の前に必ずご確認ください。
                </p>
                <div className="mt-8 space-y-6">
                    {sections.map((section) => (
                        <article key={section.title}>
                            <h2 className="text-xl font-semibold text-slate-900">
                                {section.title}
                            </h2>
                            <p className="mt-2 leading-relaxed text-slate-700">{section.body}</p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 text-sm text-slate-600">
                    本免責事項は予告なく変更される場合があります。変更後の免責事項は、本ページに掲載した時点で効力を発揮します。
                </p>
            </section>
        </div>
    );
}
