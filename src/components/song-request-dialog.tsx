'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitSongRequest } from '@/lib/actions/song-request'
import { songRequestSchema, type SongRequestFormValues } from '@/lib/song-request'

export function SongRequestDialog() {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SongRequestFormValues>({
        resolver: zodResolver(songRequestSchema),
    })

    const mutation = useMutation({
        mutationFn: (data: SongRequestFormValues) => submitSongRequest(data),
        onSuccess: () => {
            toast.success('Song request sent!')
            reset()
            setOpen(false)
        },
        onError: () => {
            toast.error('Something went wrong, please try again')
        },
    })

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <button
                onClick={() => setOpen(true)}
                className="font-body text-brown-dark/80 hover:text-brown-dark cursor-pointer text-xs underline underline-offset-2 transition-colors hover:underline"
            >
                Request a song for the dancefloor
            </button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Request a song for the dancefloor</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit((data) => mutation.mutate(data))}
                    className="flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="name"
                            className="text-brown-dark/70 text-xs tracking-widest uppercase"
                        >
                            Your name
                        </Label>
                        <Input id="name" variant="brown" {...register('name')} />
                        {errors.name && (
                            <p className="text-[11px] text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="track"
                            className="text-brown-dark/70 text-xs tracking-widest uppercase"
                        >
                            Song request
                        </Label>
                        <Input
                            id="track"
                            variant="brown"
                            placeholder="e.g. Toto – Africa"
                            {...register('track')}
                        />
                        {errors.track && (
                            <p className="text-[11px] text-red-500">{errors.track.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="bg-brown-dark text-cream hover:bg-brown-dark/90 mt-1 w-full cursor-pointer rounded-full py-2.5 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {mutation.isPending ? 'Sending…' : 'Send request'}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
