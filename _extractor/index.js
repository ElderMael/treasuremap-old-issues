async function loadIssues() {
    const {load} = await import('csv-load-sync');
    return load('./revue/issues_38CGP_4xb3-NliTZD5KVQA20221216-4-1upjwl2.csv', {})
}

async function extractContentFrom(issue) {
    const fs = await import('fs');
    const html2md = (await import('html-to-md')).default;

    const itemsContent = fs.readFileSync('./revue/items_-QYzMTxhVOuQz9Gw3_3MaA20221216-4-wr48xv.json');
    const items = JSON.parse(itemsContent);
    const orderedItems = items.filter(item => item.issue_id === +issue.id).sort((item1, item2) => item1.order - item2.order);

    const text = orderedItems.map(item => {

        switch (item.item_type) {
            case 'text':
                return html2md(item.description);

            case 'header':
                return `## ${item.description}`;

            case 'video':
                return `### ${item.description}
<iframe 
    width="420" 
    height="315" 
    src="${item.url}" 
    frameborder="0" 
    allowfullscreen>
</iframe>`;

            case 'link':
                return `### ${item.title}
                [![${item.description}](${item.image})](${item.url})
                `;
        }

        return html2md(item.description);
    }).join('\n');

    return text;
}

async function main() {
    const fs = await import('fs');
    const issues = (await loadIssues()).sort((issue1, issue2) => issue1.id - issue2.id);
    const files = issues.map(async issue => {

        const item_content = await extractContentFrom(issue)

        const content = `---
layout: post
title: '${issue.subject}'
date: '${issue.sent_at}'
---
${item_content}
        `;

        const issueDate = new Date(issue.sent_at);

        const title = issue.subject.replaceAll('#', '').replaceAll('-', '');
        const year = issueDate.getFullYear();
        const month = issueDate.getMonth().toString().padStart(2, '0');
        const day = issueDate.getDay().toString().padStart(2, '0');

        const filename = `../_posts/${year}-${month}-${day}-${title}.markdown`;

        return {
            filename,
            content,
        };
    });

    const rendered = await Promise.all(files);

    rendered.forEach(newsletter => {
        fs.writeFileSync(newsletter.filename, newsletter.content)
    })

    return rendered;
}

main().then((issues) => {
    console.log(issues[0])
});
