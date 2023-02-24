import { useState, useEffect } from "react";

const ProfileButton = () => {
    const [saved, setSaved] = useState(false)
    
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSaved(false)
        }, 1900);
        
        return () => clearInterval(slideInterval);
    }, [saved])

    return (
        <>
            <div className="absolute bottom-10 right-20">
                <button type='submit' onClick={() => setSaved(true)} className="bg-dark-green text-white py-2 w-24 rounded-lg border-[1px] border-gray-300 mr-1">Simpan</button>
                <button type='reset' className="bg-beige2 text-black py-2 w-24 rounded-lg border-[1px] border-gray-300 ml-1">Batal</button>
            </div>
                <div className="flex justify-center">
                    <div
                        className={`${saved ? 'opacity-100 animate-slowfade' : 'opacity-0'}
                             absolute transition-all bottom-10 bg-black text-white px-4 py-2 rounded-lg cursor-default`}>Berhasil disimpan</div>
                </div>
        </>
    )
}

export default ProfileButton