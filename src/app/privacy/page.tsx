const sections = [
    {
        title: '個人情報の取得と利用目的',
        body: '本サイトでは、お問い合わせの際などにお名前やメールアドレス等の個人情報をお預かりする場合があります。取得した個人情報は、お問い合わせへの回答や必要な情報をご連絡するためにのみ利用します。',
    },
    {
        title: '個人情報の管理',
        body: 'お預かりした個人情報は、適切に管理し、第三者への開示・提供は行いません。ただし、法令に基づき開示が必要な場合はこの限りではありません。',
    },
    {
        title: 'アクセス解析ツールについて',
        body: '本サイトでは、アクセス状況を把握するためにアクセス解析ツールを利用する場合があります。ツールが取得するデータは匿名で収集されており、個人を特定するものではありません。',
    },
    {
        title: '広告の配信について',
        body: '本サイトは第三者配信の広告サービスを利用する場合があります。これらのサービスは、ユーザーの興味に応じた広告を表示するため、Cookieを使用することがあります。Cookieによる情報収集を望まない場合は、ブラウザの設定でCookieを無効にできます。',
    },
    {
        title: '個人情報の開示・訂正・利用停止等',
        body: 'ご本人からの個人情報の開示、訂正、削除、利用停止などのご要望があった場合は、ご本人であることを確認の上、適切に対応いたします。',
    },
    {
        title: '免責事項',
        body: '本サイトからリンクされた外部サイトで提供される情報・サービス等について、当サイトでは一切の責任を負いません。リンク先サイトのプライバシーポリシーをご確認ください。',
    },
    {
        title: 'プライバシーポリシーの変更',
        body: '本ポリシーの内容は、法改正や運営方針の変更により予告なく改定される場合があります。改定後のポリシーは、本ページに掲載した時点で効力を発揮します。',
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-12">
            <section className="rounded-lg bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900">プライバシーポリシー</h1>
                <p className="mt-4 text-sm text-slate-500">最終更新日: 2024年10月1日</p>
                <p className="mt-6 leading-relaxed text-slate-700">
                    本プライバシーポリシーは、当サイトで取得する個人情報の取り扱い方針を定めるものです。ご利用にあたり、本ポリシーをご確認ください。
                </p>
                <div className="mt-8 space-y-6">
                    {sections.map((section) => (
                        <article key={section.title}>
                            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                            <p className="mt-2 leading-relaxed text-slate-700">{section.body}</p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 text-sm text-slate-600">
                    本ポリシーに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。
                </p>
            </section>
        </div>
    );
}
