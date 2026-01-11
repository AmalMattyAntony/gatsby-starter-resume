import React from 'react';

export default function Awards({ data }) {
  const lists = data.edges[0].node.frontmatter;
  const awards = (lists.awards || []).map(a => a.award);
  const certifications = (lists.certifications || []).map(c => c.certification);
  const list = awards.concat(certifications);
  return <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="awards"
  >
    <div className="w-100">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      <ul className="fa-ul mb-0">
        {
          list.map(
            (element) => {
              return <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                {element}
              </li>

            },
          )
        } </ul>
    </div>
  </section>;

}