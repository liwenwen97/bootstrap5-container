'use server'

import { db } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// 新建 template
export async function createTemplate(name: string) {
  try {
    await db.template.create({
      data: {
        name,
      },
    })
    revalidatePath('/')
    redirect('/')
  } catch (error) {
    console.error(error)
  }
}