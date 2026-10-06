import { Suspense, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import './Hoodie3D.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, PresentationControls, useGLTF } from '@react-three/drei'
import { Color, Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'

const MODEL_URL = '/models/hoodie.glb'

// كل لون = لون الهودي + لون اللوجو. الأول هو الافتراضي.
const COLORS = [
    { name: 'Black', hoodie: '#272626', logo: '#ffffff' },
    { name: 'Sky Blue', hoodie: '#96d0ef', logo: '#ffffff' },
    { name: 'Cream', hoodie: '#f5e9dc', logo: '#111111' },
]

const COLOR_GAIN = 1.1 // بيعوّض إن التكستشر والإضاءة بيغمّقوا اللون شوية
const LIGHT = 1 // زوّده لو غامق، قلّله لو محروق
const BACKGROUND =
  'linear-gradient(180deg, #8ed1e8 0%, #a9dbea 48%, #dcecf0 100%)'

function HoodieModel({ look }) {
    const { scene, materials } = useGLTF(MODEL_URL)
    const hoodieMat = materials.Hoodie_Main
    const logoMat = materials.Logo_Material

    const hoodieTarget = useMemo(
        () => new Color(COLORS[0].hoodie).multiplyScalar(COLOR_GAIN),
        []
    )
    const logoTarget = useMemo(() => new Color(COLORS[0].logo), [])

    // اللون الابتدائي فوراً (من غير انتقال)
    useLayoutEffect(() => {
        hoodieMat.color.copy(hoodieTarget)
        logoMat.color.copy(logoTarget)
    }, [hoodieMat, logoMat, hoodieTarget, logoTarget])

    // لما تختار لون جديد بنحدّث الهدف، والانتقال بيحصل في useFrame
    useEffect(() => {
        hoodieTarget.set(look.hoodie).multiplyScalar(COLOR_GAIN)
        logoTarget.set(look.logo)
    }, [look, hoodieTarget, logoTarget])

    useFrame(() => {
        if (!hoodieMat.color.equals(hoodieTarget)) hoodieMat.color.lerp(hoodieTarget, 0.12)
        if (!logoMat.color.equals(logoTarget)) logoMat.color.lerp(logoTarget, 0.12)
    })

    // الـ drag: الهودي نفسه مبيشاركش في الـ raycast، وفي جسم شفاف خفيف بدله
    useLayoutEffect(() => {
        let hoodie
        scene.traverse((o) => {
            if (!o.isMesh) return
            o.raycast = () => { }
            if (o.material === hoodieMat) hoodie = o
        })

        const pos = hoodie.geometry.attributes.position
        const pts = []
        for (let i = 0; i < pos.count; i += 30) {
            pts.push(new Vector3().fromBufferAttribute(pos, i))
        }
        const hitArea = new Mesh(
            new ConvexGeometry(pts),
            new MeshBasicMaterial({ visible: false })
        )
        hoodie.add(hitArea)

        return () => {
            hoodie.remove(hitArea)
            hitArea.geometry.dispose()
        }
    }, [scene, hoodieMat])

    return (
        <Center>
            <group rotation={[0, -2.292, 0]}>
                <primitive object={scene} />
            </group>
        </Center>
    )
}

export default function Hoodie3D() {
    const [look, setLook] = useState(COLORS[0])

    const [fov, setFov] = useState(() => {
    if (window.innerWidth <= 390) return 65
    if (window.innerWidth <= 767) return 55
    if (window.innerWidth <= 1199) return 45
    return 35
    })

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 390) {
                setFov(42)
            } else if (window.innerWidth <= 767) {
                setFov(40)
            } else if (window.innerWidth <= 1199) {
                setFov(37)
            } else {
                setFov(35)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            style={{ background: BACKGROUND }}
        >
            {/* ================= SKY BACKGROUND ================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Sky */}
        <div
            className="
            absolute inset-0
            bg-[linear-gradient(180deg,#91d7ee_0%,#9edbee_45%,#a9ddec_100%)]
            "
        />

        {/* Soft sky glow */}
        <div
            className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.18),transparent_50%)]
            "
        />

        {/* ================= LEFT TOP CLOUD ================= */}
        <div className="absolute -top-12 -left-20 w-[430px] h-[180px]">

            <div className="absolute left-0 bottom-0 w-48 h-24 rounded-full bg-white/75 blur-[14px]" />
            <div className="absolute left-24 bottom-5 w-44 h-28 rounded-full bg-white/80 blur-[14px]" />
            <div className="absolute left-48 bottom-0 w-40 h-24 rounded-full bg-white/70 blur-[15px]" />

        </div>


        {/* ================= RIGHT TOP CLOUD ================= */}
        <div className="absolute -top-16 -right-24 w-[450px] h-[190px]">

            <div className="absolute right-0 bottom-0 w-52 h-24 rounded-full bg-white/75 blur-[15px]" />
            <div className="absolute right-24 bottom-5 w-48 h-28 rounded-full bg-white/80 blur-[15px]" />
            <div className="absolute right-48 bottom-0 w-40 h-24 rounded-full bg-white/65 blur-[15px]" />

        </div>


        {/* ================= LEFT MIDDLE CLOUD ================= */}
        <div className="absolute left-[-90px] top-[45%] w-[430px] h-[220px]">

            <div className="absolute left-0 bottom-0 w-52 h-32 rounded-full bg-white/80 blur-[18px]" />
            <div className="absolute left-24 bottom-8 w-48 h-40 rounded-full bg-white/85 blur-[18px]" />
            <div className="absolute left-52 bottom-0 w-52 h-32 rounded-full bg-white/75 blur-[18px]" />

        </div>


        {/* ================= RIGHT MIDDLE CLOUD ================= */}
        <div className="absolute right-[-100px] top-[48%] w-[430px] h-[210px]">

            <div className="absolute right-0 bottom-0 w-52 h-30 rounded-full bg-white/75 blur-[18px]" />
            <div className="absolute right-28 bottom-8 w-48 h-36 rounded-full bg-white/80 blur-[18px]" />
            <div className="absolute right-52 bottom-0 w-44 h-28 rounded-full bg-white/70 blur-[18px]" />

        </div>


        {/* ================= VERY SOFT DISTANT CLOUDS ================= */}
        <div
            className="
            absolute
            top-[25%]
            left-[25%]
            w-[350px]
            h-[120px]
            rounded-full
            bg-white/10
            blur-[35px]
            "
        />

        <div
            className="
            absolute
            top-[30%]
            right-[20%]
            w-[300px]
            h-[120px]
            rounded-full
            bg-white/10
            blur-[35px]
            "
        />

        </div>


            {/* ================= TOP LEFT TITLE ================= */}

            <div className="absolute top-16 left-8 md:left-16 lg:left-24 z-20">

                <div className="flex items-center gap-4 mb-5">
                    <p
                        className="
          text-[10px]
          md:text-xs
          font-bold
          tracking-[0.45em]
          uppercase
          text-black/75
        "
                    >
                        Customize / 03
                    </p>

                    <span className="w-20 h-px bg-black/40" />
                </div>


                <h2
                    className="
        text-[58px]
        md:text-[80px]
        lg:text-[100px]
        xl:text-[115px]
        font-black
        uppercase
        tracking-[-0.07em]
        leading-[0.78]
        text-black
      "
                >
                    MAKE IT
                    <br />
                    YOURS<span className="text-[#48b8dc]">.</span>
                </h2>


                <p
                    className="
        mt-8
        max-w-[300px]
        text-sm
        md:text-base
        leading-6
        text-black/60
        font-medium
      "
                >
                    Pick your color and create
                    <br />
                    the hoodie that matches
                    <br />
                    your vibe.
                </p>

            </div>


            {/* ================= 3D MODEL ================= */}

            <div className="absolute inset-0 z-10">

            <Canvas key={fov} flat camera={{ position: [0, 0, 10], fov }} dpr={[1, 1.5]}>
                <hemisphereLight intensity={0.8 * LIGHT} />
                <directionalLight position={[80, 5, 7]} intensity={2.4 * LIGHT} />
                <directionalLight position={[-6, 2, 6]} intensity={0.9 * LIGHT} />
                <directionalLight position={[0, 5, -6]} intensity={1 * LIGHT} />

                <Suspense fallback={null}>
                    <PresentationControls
                            snap={0.7}
                            polar={[-1, 1]}
                            azimuth={[-Math.PI, Math.PI]}
                            speed={1.2}
                            damping={0.1}
                        >
                            <HoodieModel look={look} />
                    </PresentationControls>
                </Suspense>
            </Canvas>

            </div>


            {/* ================= RIGHT COLOR SELECTOR ================= */}

            <div
                className="
      absolute
      right-8
      md:right-16
      lg:right-24
      top-1/2
      -translate-y-1/2
      z-30
    "
            >

                <p
                    className="
        text-[10px]
        font-bold
        tracking-[0.45em]
        uppercase
        text-black/55
      "
                >
                    Choose
                </p>

                <p
                    className="
        mt-2
        text-[10px]
        font-bold
        tracking-[0.45em]
        uppercase
        text-black/55
      "
                >
                    Your Color
                </p>

                <div className="w-10 h-px bg-black/50 mt-5 mb-6" />


                <div className="flex items-center gap-3">

                    {COLORS.map((c) => {

                        const active = look.hoodie === c.hoodie

                        return (
                            <button
                                key={c.hoodie}
                                aria-label={c.name}
                                onClick={() => setLook(c)}
                                className="
              relative
              size-12
              rounded-full
              flex
              items-center
              justify-center
              transition-all
              duration-500
              hover:scale-110
              active:scale-95
              pointer-events-auto
            "
                            >

                                {/* Outer active ring */}
                                <span
                                    className={`
                absolute
                inset-0
                rounded-full
                border-2
                transition-all
                duration-500
                ${active
                ? 'border-white scale-110 shadow-[0_0_0_3px_rgba(255,255,255,0.35)]' : 'border-white/40'}`}
                                />

                                {/* Color */}
                                <span
                                    className="
                size-8
                rounded-full
                shadow-[inset_0_2px_5px_rgba(255,255,255,0.4)]
              "
                                    style={{
                                        backgroundColor: c.hoodie,
                                    }}
                                />

                            </button>
                        )
                    })}

                </div>

            </div>


            {/* ================= RIGHT SIDE NUMBERS ================= */}

            <div
                className="
      absolute
      right-8
      md:right-12
      lg:right-20
      top-28
      z-20
      hidden md:flex
      flex-col
      items-start
      gap-5
    "
            >

                <span className="absolute left-[-22px] top-[-8px] w-px h-44 bg-black/25" />

                <span className="text-xs text-black/45">
                    01
                </span>

                <span className="text-xs text-black/45">
                    02
                </span>

                <span className="text-sm font-bold text-black">
                    03
                </span>

            </div>


            {/* ================= BOTTOM PRODUCT INFO ================= */}

            <div
                className="
      absolute
      left-8
      md:left-16
      lg:left-24
      bottom-12
      z-30
    "
            >

                <p
                    className="
        text-[9px]
        font-bold
        tracking-[0.4em]
        uppercase
        text-black/45
      "
                >
                    Hoodie / 03
                </p>

                <h3
                    className="
        mt-3
        text-xl
        md:text-2xl
        font-black
        uppercase
        tracking-tight
        text-black
      "
                >
                    Dreamy Hoodie
                </h3>

                <div className="w-12 h-px bg-black/30 mt-5" />

                <p
                    className="
        mt-4
        text-[9px]
        font-bold
        tracking-[0.35em]
        uppercase
        text-black/45
      "
                >
                    New Season / 2026
                </p>

            </div>


          {/* ================= HERO BACKGROUND SHAPES ================= */}

            {/* Cream wave - left */}
            <div
            className="
                absolute
                -bottom-[115px]
                -left-[18%]
                w-[70%]
                h-[250px]
                rounded-[50%]
                bg-[#f8eee5]
                rotate-[5deg]
                z-[5]
                pointer-events-none
            "
            />

            {/* Light blue wave - right */}
            <div
            className="
                absolute
                -bottom-[125px]
                -right-[18%]
                w-[75%]
                h-[260px]
                rounded-[50%]
                bg-[#c8dce5]
                -rotate-[5deg]
                z-[6]
                pointer-events-none
            "
            />

            {/* Main blue center wave */}
            <div
            className="
                absolute
                -bottom-[155px]
                left-[8%]
                w-[84%]
                h-[260px]
                rounded-[50%]
                bg-[#b8e0ed]
                z-[7]
                pointer-events-none
            "
            />

            {/* Soft highlight on center wave */}
            <div
            className="
                absolute
                -bottom-[90px]
                left-[25%]
                w-[50%]
                h-[150px]
                rounded-[50%]
                bg-white/25
                blur-2xl
                z-[8]
                pointer-events-none
            "
            />


            {/* ================= DRAG HINT ================= */}

            <div
                className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      z-40
      hidden md:flex
      items-center
      gap-4
    "
            >

                <span className="w-10 h-px bg-black/25" />

                <p
                    className="
        text-[9px]
        font-bold
        tracking-[0.45em]
        uppercase
        text-black/45
      "
                >
                    Drag to explore
                </p>

                <span className="w-10 h-px bg-black/25" />

            </div>


            {/* ================= SHOP BUTTON ================= */}

            <div
                className="
      absolute
      right-8
      md:right-16
      lg:right-24
      bottom-10
      z-40
    "
            >

                <button
                    className="
        group
        flex
        items-center
        gap-5
        px-6
        py-3
        rounded-full
        bg-white
        text-black
        text-[10px]
        font-black
        uppercase
        tracking-[0.12em]
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
        pointer-events-auto
      "
                >

                    Shop this hoodie

                    <span
                        className="
          flex
          items-center
          justify-center
          size-8
          rounded-full
          bg-black
          text-white
          text-sm
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
                    >
                        →
                    </span>

                </button>

            </div>

        </div>
    )
}

useGLTF.preload(MODEL_URL)