import siteMetadata from '@/data/siteMetadata'
import certificatesData from '@/data/certificatesData'
import CertificateCard from '@/components/CertificateCard'
import { PageSEO } from '@/components/SEO'

export default function Certifates() {
  return (
    <>
      <PageSEO
        title={`Certificates - ${siteMetadata.author}`}
        description="Certificates i've acquired throughout my career"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Certificates
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Certificates i've acquired throughout my career
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {certificatesData.map((d) => (
              <CertificateCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                github={d.github}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
