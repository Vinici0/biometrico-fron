"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export const ConfiguracionScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Configuración</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="text-sm font-medium text-gray-700">
              Notificaciones
            </Label>
            <Switch id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="text-sm font-medium text-gray-700">
              Modo Oscuro
            </Label>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

