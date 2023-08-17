export default function serviceCard(content) {
  return `
        <div class="service-card">
          <img src="${content?.img}" class="card-img" alt="..." />
          <p class="card-body">${content?.body}</p>
        </div>
  `;
}
