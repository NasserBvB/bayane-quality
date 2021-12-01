import { Image } from 'antd'
import { DetailProcess } from 'Components/DetailProcess'
import React from 'react'
import { Layout } from '../Components/Layout'

export default function PolitiqueQualitePage() {
    return <Layout>
        <DetailProcess page="Politique qualité" />
        <Image
            style={{ marginTop: '20px', marginBottom: '20px' }}
            preview={false}
            width="100%"
            height="100%"
            src="/Fiche-processus-600x350.png"
        />
        <Image
            preview={false}
            width="100%"
            height="100%"
            src="/politique-qualite2.jpg"
        />
    </Layout>
}
